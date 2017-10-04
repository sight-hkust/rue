'use strict'

// requirements
const Parse = jest.genMockFromModule('parse')

// symbols
const CLASS = Symbol('CLASS')
const ENTRY = Symbol('ENTRY')

// database
const db = {
  'classes': {},
  'data': {},
  'id': {},
}

class Relation{
  constructor(arr){
    this[ENTRY] = arr
  }
  add(e){
    if(e[Symbol.iterator]){
      for(const o of e){
        this.add(o)
      }
    }else{
      this[ENTRY].push(e.get('objectId'))
    }
  }
  remove(e){
    if(e[Symbol.iterator]){
      for(const o of e){
        this.remove(o)
      }
    }else{
      for(let i = 0; i < this[ENTRY].length; i++){
        if(this[ENTRY][i] === e.get('objectId')){
          this[ENTRY].splice(i, 1)
          i--
        }
      }
    }
  }
}

Parse.Object = class Object {
  constructor(classname){
    this[CLASS] = classname
    this[ENTRY] = {}
  }
  set(key, value, options){
    if(typeof key !== 'string')
      // set(attrs, options)
      for(const k in key)
        this.set(k, key[k], options)
    else
      this[ENTRY][key] = value
    return true
  }
  get(key){
    return this[ENTRY][key]
  }
  async save(arg0, arg1, arg2){
    let options = {}
    if(arguments.length === 3){
      // save(key, value, options)
      if(arg2)
        options = arg2
      this.set(arg0, arg1)
    }else{
      // save(attrs, options)
      if(arg0)
        this.set(arg0)
      if(arg1)
        options = arg1
    }
    const clsStore = db.data[this[CLASS]]
    if(!(this.get('objectId') in db.data[this[CLASS]])){
      this.set('objectId', db.id[CLASS]++)
    }
    clsStore[this.get('objectId')] = JSON.parse(JSON.stringify(this[ENTRY]))
    if(options.success)
      options.success(this)
    return this
  }
  static async saveAll(list, options){
    const promises = []
    list.forEach((obj)=>promises.push(obj.save()))
    return await Promise.all(promises)
      .then(()=>{
        if(options && options.success)
          options.success(list)
      }).catch((e)=>{
        if(options && options.error)
          options.error(e)
      })
  }
  static registerSubclass(name, cls){
    db.classes[name] = cls
    db.data[name] = {}
    db.id[name] = 1
  }
  async destroy(options){
    Reflect.deleteProperty(db.data[this[CLASS]], this.get('objectId'))
    if(options && options.success)
      options.success()
  }
  static async destroyAll(list, options){
    for(const obj of list){
      await obj.destroy()
    }
    if(options && options.success)
      options.success()
  }
  relation(fieldName){
    if(!this.get(fieldName))
      this.set(fieldName, [])
    return new Relation(this.get(fieldName))
  }
}

Parse.Query = class Query {
  constructor(cls){
    this[CLASS] = cls.name
  }
  create(objectId){
    return db.classes[this[CLASS]].create(
      db.data[this[CLASS]][objectId]
    )
  }
  // only support find all for now
  async find(){
    return Object.keys(db.data[this[CLASS]]).map(
      (objectId)=>this.create(objectId)
    )
  }
  async count(){
    return Object.keys(db.data[this[CLASS]]).length
  }
  async get(objectId){
    return this.create(objectId)
  }
}

export default Parse

import Parse from './parse'

/**
 * @arg name Name of the class passed to Parse.Object.constructor
 * @arg fields (Optional) Array containing field names
 * @arg relationalFields (Optional) Array containing relational field names.
 *                       See Parse.Object.relation()
 * @arg functions (Optional) Array/Object containing methods of the class.
 *                The names of the functions will be used.
 * @returns a class with constructor for all fields
 */
export default function makeClass({
  name,
  fields=[],
  relationalFields=[],
  functions=[]}
){
  class CLASS extends Parse.Object {
    /**
     * Constructor of the dynamic class
     * @arg props An object containing the fieldName-value pairs. For relational
     *            fields, either an array (can be empty) or a value (cannot be
     *            undefined or left empty)
     */
    constructor(){
      super(name)
    }
    static query(){
      return new Parse.Query(CLASS)
    }
    static create(props){
      if(!props)
        throw Error(`props is ${props}`)
      const obj = new CLASS()
      for(const field of fields){
        if(!(field in props))
          throw Error(`${field} not in ${JSON.stringify(props)}`)
        obj[field] = props[field]
      }
      return obj
    }
  }
  for(const name in functions){
    CLASS.prototype[name] = functions[name]
  }
  // https://stackoverflow.com/questions/33605775/es6-dynamic-class-names
  Object.defineProperty(CLASS, 'name', {'value': name})

  for(const field of fields){
    Object.defineProperty(CLASS.prototype, field, {
      get(){ return this.get(field) },
      set(value){ this.set(field, value) }
    })
  }
  for(const relationalField of relationalFields){
    Object.defineProperty(CLASS.prototype, relationalField, {
      get(){ return this.relation(relationalField) }
    })
  }
  Parse.Object.registerSubclass(name, CLASS)

  return CLASS
}

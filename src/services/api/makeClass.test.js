import makeClass from './makeClass'

jest.mock('parse')

describe('makeClass', ()=>{
  describe('without any arguments', ()=>{
    let Test
    beforeAll(()=>{
      Test = makeClass({'name': 'Test'})
    })
    it('can make a class', ()=>{
      expect(Test).toBeInstanceOf(Function)
      expect(Test).toThrow() // cannot call Test() directly
    })
    it('makes a class with a static create function', ()=>{
      expect(Test.create).toBeInstanceOf(Function)
      expect(()=>Test.create()).toThrow()
      expect(Test.create({})).toBeInstanceOf(Test)
    })
    it('makes a class that can query', async()=>{
      expect(Test.query).toBeTruthy()
      await expect(Test.query().find()).resolves.toBeInstanceOf(Array)
    })
  })
  describe('with fields', ()=>{
    let Test
    beforeAll(()=>{
      Test = makeClass({
        'name': 'Test',
        'fields': ['course', 'date']
      })
    })
    it('can make a class', ()=>{
      expect(Test).toBeInstanceOf(Function)
      expect(Test).toThrow() // cannot call Test() directly
    })
    it('makes a class with a static create function', ()=>{
      expect(Test.create).toBeInstanceOf(Function)
      expect(()=>Test.create()).toThrow()
      expect(()=>Test.create({})).toThrow()
      const test = Test.create({
        'course': 'COMP 2013',
        'date': new Date('2015-11-09')
      })
      expect(test).toBeInstanceOf(Test)
      expect(test.get('course')).toEqual(test.course)
      test.course = 'COMP 2014'
      expect(test.get('course')).toEqual('COMP 2014')
    })
  })
  describe('with relations', ()=>{
    const classes = {}
    beforeEach(async()=>{
      classes.TestResult = makeClass({
        'name': 'TestResult',
        'fields': ['name', 'score']
      })
      classes.Test = makeClass({
        'name': 'Test',
        'relationalFields': ['results']
      })
      await classes.TestResult.destroyAll(await classes.TestResult.query().find())
      await classes.Test.destroyAll(await classes.Test.query().find())
    })
    it('can have relations', async()=>{
      const {TestResult, Test} = classes
      const result = TestResult.create({'name': 'Myke', 'score': 99})
      const resultArray = [
        TestResult.create({'name': 'Brady', 'score': 42}),
        TestResult.create({'name': 'Grey', 'score': 64})
      ]
      const test = Test.create({})
      await TestResult.saveAll([...resultArray, result])
      test.results.add(resultArray)
      test.results.add(result)
      await test.save()
    })
  })
  describe('with custom functions', ()=>{
    it('can have custom functions', ()=>{
      const Test = makeClass({
        'name': 'Test',
        'fields': ['laugh'],
        'functions': {
          blah(){
            return 42
          },
          haha(){
            return this.laugh + this.laugh
          }
        }
      })
      const test = Test.create({'laugh': 'hahaha'})
      expect(test.blah()).toEqual(42)
      expect(test.haha()).toEqual('hahahahahaha')
    })
  })
})

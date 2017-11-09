import { Patient, Profile, Vitals, Condition,
  MedicalHistory, Case, Medication, } from './model'
import Parse from './parse'

const they = it

describe('Models', ()=>{
  beforeEach(async ()=>{
    const classes = [Patient, Profile, Vitals, Condition,
      MedicalHistory, Case, Medication]
    return Promise.all(classes.map(async (cls)=>{
      const objs = await cls.query().find()
      return await Parse.Object.destroyAll(objs)
    }))
  })
  they('are empty', async ()=>{
    expect.assertions(1)
    const count = await Patient.query().count()
    expect(count).toBe(0)
  })
  describe('Patient', ()=>{
    it('can attach stuff', async ()=>{
      const patient = Patient.create({
        profile: {},
        condition: {},
        medicalHistory: {},
        entries: {},
      })
      patient.attach('hello', 10)
      patient.attach('bye', 'hi')
      await expect(patient.save()).resolves.toBeTruthy()
      const fetchedPatient = (await new Parse.Query(Patient).find())[0]
      expect(fetchedPatient.entries.hello).toBe(10)
    })
  })
  describe('Vitals', ()=>{
    it('can compute BMI', ()=>{
      const height = 200
      const weight = 50
      const vitals = Vitals.create({
        bloodPressure: [80, 120], heartRate: 80, respiratoryRate: 60,
        bodyTemperature: 37, bloodOxygenSaturation: 100, bloodSuger: 8,
        weight, height
      })
      expect(vitals.computeBMI()).toEqual(12.5)
    })
  })
  describe('Profile', ()=>{
    it('has nothing special to test', ()=>{})
  })
  describe('Condition', ()=>{
    it('has nothing special to test', ()=>{})
  })
  describe('MedicalHistory', ()=>{
    it('has nothing special to test', ()=>{})
  })
  describe('Case', ()=>{
    it('has nothing special to test', ()=>{})
  })
  describe('Medication', ()=>{
    it('has nothing special to test', ()=>{})
  })
})

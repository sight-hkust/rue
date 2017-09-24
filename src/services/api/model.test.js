import { Patient, Profile, Vitals, Condition, MedicalHistory, Case, Medication } from './model'
import * as moment from 'moment'

const mock = {}

it('Creates a new profile', async () => {
  expect.assertions(1)
  mock.profile = new Profile(
    'Somewhere on earth',
    'M',
    moment('1984-01-08').toDate(),
    'S',
    ['John','Doe']
  )
  const result = await mock.profile.save()
  expect(result.id).toBeTruthy()
  console.log(result.id)
})

it('Creates a new patient', async () => {
  expect.assertions(1)
  mock.patient = new Patient(mock.profile)
  const result = await mock.patient.save()
  expect(result.id).toBeTruthy()
  mock.patientId = result.id
  console.log(result.id)
})

it('Creates a new record of patient\'s vitals', async () => {
  expect.assertions(1)
  mock.vitals = new Vitals([144, 82], 91, 115, 35, 166, 57, 15, 96)
  const result = await mock.vitals.save()
  expect(result.id).toBeTruthy()
  console.log(result.id)
})

it('Creates a new record of relevant conditions', async () => {
  expect.assertions(1)
  mock.condition = new Condition(
    
  )
  const result = await mock.condition.save()
  expect(result.id).toBeTruthy()
  console.log(result.id)
})

it('Creates a new record of medical history', async () => {
  expect.assertions(1)
  mock.medicalHistory = new MedicalHistory(
    /*
      TODO: Description of a stub medical history
    */
  )
  const result = await mock.medicalHistory.save()
  expect(result.id).toBeTruthy()
  console.log(result.id)
})

it('Create a new record of medication for a case of a patient', async () => {
  expect.assertions(1)
  mock.medication = new Medication(
    /*
      TODO: Details of the prescribed medication for the stub case
    */
  )
  const result = await mock.medication.save()
  expect(result.id).toBeTruthy()
  console.log(result.id)
})

it('Create a new record of case file for patient', async () => {
  expect.assertions(1)
  mock.case = new Case(
    /*
      TODO: Description of a stub case
    */
    mock.medication
  )
  const result = await mock.case.save()
  expect(result.id).toBeTruthy()
  console.log(result.id)
})
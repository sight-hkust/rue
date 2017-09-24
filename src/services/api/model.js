import Parse from './parse'
import * as moment from 'moment'

/*
  Patient is a root container class for
  maintaining rest of the various classes 

  * `archive` is the property that stores the
  entry of a record (per visit) using unix timestamp
  as key
*/

class Patient extends Parse.Object {
  constructor(profile){
    super('Patient')
    this.setup(profile)
    this.entry = []
  }

  setup(profile){
    const relation = this.relation('profile')
    relation.add(profile)
  }

  attach(...records){
    const key = Date.now().toString()
    this.entry.push(key)
    this.set(key, records)
  }
}

/*
  Profile describes personal information that remain 
  constant regardless of patient's health change.
*/

class Profile extends Parse.Object {
  constructor(address, contact, dateOfBirth, gender, maritalStatus, name) {
    super('Profile')
    this.name = name
    this.gender = gender
    this.dateOfBirth = dateOfBirth
    this.maritalStatus = maritalStatus
    this.address = address
    this.contact = contact
    this.age = this.age()
  }

  computeAge(){
    return moment().diff(this.dateOfBirth, 'years')
  }
}

/*
  Vitals describes the patient's parameter regarding
  their measurable body health metric.
*/

class Vitals extends Parse.Object {
  constructor([systolic, diastolic], heartRate, bloodSuger, bodyTemperature, height, weight, respiratoryRate, bloodOxygenSaturation) {
    super('Vitals')
    this.bloodPressure = [systolic, diastolic]
    this.heartRate = heartRate
    this.respiratoryRate = respiratoryRate
    this.bodyTemperature = bodyTemperature
    this.bloodOxygenSaturation = bloodOxygenSaturation
    this.bloodSuger = bloodSuger
    this.weight = weight
    this.height = height
    this.bodyMassIndex = this.computeBMI()
  }

  computeBMI(){
    return this.weight/Math.pow(this.height/100,2)
  }
}

/*
  Condition describes the potential complications that
  might occurred without acknowledgement predate the
  clinical diagnosis
*/

class Condition extends Parse.Object {
  constructor(pregancy, allergies, tobacoUse, achoholUse, interactions){
    super('Condition')
    this.pregancy = pregancy
    this.allergies = allergies
    this.tobacoUse = tobacoUse
    this.achoholUse = achoholUse
    this.interactions = interactions
  }
}

/*
  MedicalHistory describes the previous medical related event
  and conditions
*/

class MedicalHistory extends Parse.Object {
  constructor(childhoodDiseases = [], drugRecord, familyDiseases = [], immunisation = [], surgeries = [], pastMajorIllness = []) {
    super('MedicalHistory')
    this.childhoodDiseases = childhoodDiseases
    this.immunisation = immunisation
    this.familyDiseases = familyDiseases
    this.pastMajorIllness = pastMajorIllness
    this.drugRecord = drugRecord
    this.surgeries = surgeries
  }
}

/*
  Review describes the full systematic check-up of a patient,
  it contains type from SystemSummary class
*/

class Review extends Parse.Object {
  constructor(){
    super('Review')
  }
}

/*
  SystemSummary describes the remarks and notes regarding
  to patient's particular system:
   - Cardiovascular
   - Respiratory
   - Gastrointestinal
   - Genitourinary
   - Nervous
   - Cranial Nerves
   - Endocrine
   - Musculoskeletal
   - Skin
*/

class SystemSummary extends Parse.Object {
  constructor(type, description){
    super('SystemSummary')
    this.type = type
    this.description = description
  }
}

/*
  Case describes the information processed by the doctor at the consultation
  
*/

class Case extends Parse.Object {
  constructor(chiefComplaint, diagnosis, medication, advice, nextAppointment, symptoms, labTestResult) {
    super('Case')
    this.chiefComplaint = chiefComplaint
    this.diagnosis = diagnosis
    this.medication = this.prescribe(medication)
    this.advice = advice
    this.nextAppointment = nextAppointment
    this.symptoms = symptoms
    this.labTestResult = labTestResult
  }

  prescribe(medication){
    const relation = this.relation('medication')
    relation.add(medication)
  }
}

/*
  Medication 
*/

class Medication extends Parse.Object {
  constructor(dosage, drug, consumption, refernceId = 0){
    super('Medication')
    this.drug = drug
    this.refernceId = refernceId
    this.dosage = dosage
    this.consumption = consumption
  }
}

const classes = [
  { name: 'Patient', class: Patient },
  { name: 'Profile', class: Profile },
  { name: 'Vitals', class: Vitals },
  { name: 'Condition', class: Condition },
  { name: 'MedicalHistory', class: MedicalHistory },
  { name: 'Case', class: Case },
  { name: 'Medication', class: Medication },
  { name: 'Review', class: Review },
  { name: 'Summary', class: SystemSummary }
]

classes.forEach((defined) => { Parse.Object.registerSubclass(defined.name, defined.class) })

export { Patient, Profile, Vitals, MedicalHistory, Case, Condition, SystemSummary, Review, Medication }
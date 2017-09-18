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
  constructor(){
    super('Patient')
    this.archive = []
  }

  attach(...records){
  	const key = Date.now().toString()
  	this.archive.push(key)
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
	constructor(bloodPressure, bloodSuger, bodyTemperature, height, weight, respiratoryRate, bloodOxygenSaturation) {
		super('Vitals')
		this.bloodPressure = bloodPressure
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
	constructor(pregancy){
		super('Condition')
		this.pregancy = pregancy
		this.allergies = allergies
	}
}

/*
	History describes the previous medical related event
	and conditions
*/

class History extends Parse.Object {
	constructor(allergies, screening, drugUsed) {
		super('History')
		this.screening = screening
		this.drugUsed = drugUsed
	}
}

class Case extends Parse.Object {
	constructor(diagnosis, medication, advice, appointment, symptoms) {
		super('Case')
		this.diagnosis = diagnosis
		this.medication = medication
		this.advice = advice
		this.appointment = appointment
		this.symptoms = symptoms
	}
}

const classes = [
	{ name: 'Patient', class: Patient },
	{ name: 'Profile', class: Profile },
	{ name: 'Vitals', class: Vitals },
	{ name: 'Condition', class: Condition },
	{ name: 'History', class: History },
	{ name: 'Case', class: Case }
]

classes.map((defined) => { Parse.Object.registerSubclass(defined.name, defined.class) })

export { Patient, Profile, Vitals, History, Case, Condition }
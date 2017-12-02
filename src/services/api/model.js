import makeClass from './makeClass'

/*
  Patient is a root container class for
  maintaining rest of the various classes

  * `archive` is the property that stores the
  entry of a record (per visit) using unix timestamp
  as key
  /**
   * Constructor
   * @arg props.profile {Profile}
   * @arg props.condition {Condition}
   * @arg props.medicalHistory {MedicalHistory}
   */
//*/

const Patient = makeClass({
  'name': 'Patient',
  'fields': [
    'profile',
    'condition',
    'medicalHistory',
  ],
  'relationalFields': [
    'cases',
  ],
})

/*
  Profile describes personal information that remain
  constant regardless of patient's health change.
*/

const Profile = makeClass({
  name: 'Profile',
  fields: [
    'name',
    'gender',
    'dateOfBirth',
    'maritalStatus',
    'address',
    'contact',
  ],
})

/*
  Vitals describes the patient's parameter regarding
  their measurable body health metric.
*/

const Vitals = makeClass({
  name: 'Vitals',
  fields: [
    'bloodPressure',
    'heartRate',
    'respiratoryRate',
    'bodyTemperature',
    'bloodOxygenSaturation',
    'bloodSuger',
    'weight',
    'height',
  ],
  functions: {
    computeBMI(){
      return this.weight / Math.pow(this.height / 100, 2)
    },
  },
})

/*
  Condition describes the potential complications that
  might occurred without acknowledgement predate the
  clinical diagnosis
*/

const Condition = makeClass({
  'name': 'Condition',
  'fields': [
    'pregnancy',
    'allergies',
    'substanceUse',
    'interactions',
  ],
})

/*
  MedicalHistory describes the previous medical related event
  and conditions
*/

const MedicalHistory = makeClass({
  'name': 'MedicalHistory',
  'fields': [
    'childhoodDiseases',
    'immunization',
    'familyDiseases',
    'pastMajorIllness',
    'drugRecord',
    'surgeries',
  ],
})

/*
  Review describes the full systematic check-up of a patient,
  it contains type from SystemSummary class
*/

const Review = makeClass({
  'name': 'Review'
})

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

const SystemSummary = makeClass({
  'name': 'SystemSummary',
  'fields': [
    'type',
    'description',
  ],
})

/*
  Case describes the information processed by the doctor at the consultation

*/

const Case = makeClass({
  'name': 'Case',
  'fields': [
    'chiefComplaint',
    'diagnosis',
    'advice',
    'nextAppointment',
    'symptoms',
    'labTestResult',
  ],
  'relationalFields': [
    'medication',
  ],
})

/*
  Medication
*/

const Medication = makeClass({
  'name': 'Medication',
  'fields': [
    'drug',
    'refernceId',
    'dosage',
    'consumption',
  ],
})

export { Patient, Profile, Vitals, MedicalHistory, Case, Condition, SystemSummary, Review, Medication }

import { call, put, takeLatest } from 'redux-saga/effects'
import { Patient, Profile, Condition, MedicalHistory } from 'services/api/model'
import { CREATE_PATIENT, CREATE_PATIENT_SUCCESS, QUERY_PATIENT_PROFILE, QUERY_PATIENT_PROFILE_SUCCESS} from '../action/types'

function* createPatient(){
  const profile = Profile.create({
    'name': '',
    'gender': '',
    'dateOfBirth': '',
    'maritalStatus': '',
    'address': '',
    'contact': '',
  })
  const condition = Condition.create({
    'pregnancy': '',
    'allergies': '',
    'tobaccoUse': '',
    'alcoholUse': '',
    'interactions': '',
  })
  const medicalHistory = MedicalHistory.create({
    'childhoodDiseases': '',
    'immunization': '',
    'familyDiseases': '',
    'pastMajorIllness': '',
    'drugRecord': '',
    'surgeries': '',
  })
  yield call(profile.save.bind(profile))
  yield call(condition.save.bind(condition))
  yield call(medicalHistory.save.bind(medicalHistory))
  const patient = Patient.create({
    'profile': profile,
    'condition': condition,
    'medicalHistory': medicalHistory,
    'entries': [],
  })
  yield call(patient.save.bind(patient))
  yield put({type: CREATE_PATIENT_SUCCESS, payload: patient})
}

function* queryPatientProfile(s) {
  try {
    const query = Profile.query()
    query.equalTo('name', s)
    const results = yield call(query.find())
    yield put({type: QUERY_PATIENT_PROFILE_SUCCESS, payload: results})
  }
  catch (error) {
    console.log(error)
  }
}

export function* watchCreatePatient(){
  yield takeLatest(CREATE_PATIENT, createPatient)
}

export function* watchQueryPatientProfile() {
  yield takeLatest(QUERY_PATIENT_PROFILE, queryPatientProfile)
}
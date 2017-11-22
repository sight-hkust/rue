import {
  CREATE_PATIENT_SUCCESS, CLEAR_CURRENT_PATIENT, QUERY_PATIENT_PROFILE, QUERY_PATIENT_PROFILE_SUCCESS
} from '../action/types'

const initialState = {
  'patient': null,
  'profiles': []
}

const patientReducer = (state = initialState, { type, payload }) => {
  switch(type) {
    case CLEAR_CURRENT_PATIENT:
      return {...state, patient: null }
    case CREATE_PATIENT_SUCCESS:
      return { ...state, patient: payload }
    case QUERY_PATIENT_PROFILE:
      return {...state }
    case QUERY_PATIENT_PROFILE_SUCCESS:
      return {...state, profiles: payload }
    default:
      return state
  }
}

export default patientReducer

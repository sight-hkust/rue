import {
  CREATE_PATIENT_SUCCESS, CLEAR_CURRENT_PATIENT
} from '../action/types'

const initialState = {
  'patient': null,
}

const patientReducer = (state = initialState, { type, payload }) => {
  switch (type) {
  case CLEAR_CURRENT_PATIENT:
    return { ...state, patient: null }
  case CREATE_PATIENT_SUCCESS:
    return { ...state, patient: payload }
  default:
    return state
  }
}

export default patientReducer

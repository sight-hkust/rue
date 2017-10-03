export const CREATE_PATIENT = 'CREATE_PATIENT'
export const UPDATE_PATIENT = 'UPDATE_PATIENT'
export const DELETE_PATIENT = 'DELETE_PATIENT'
export const FETCH_PATIENT = 'FETCH_PATIENT'

export const createPatient = (profile) => ({
  type: CREATE_PATIENT,
  payload: profile
})

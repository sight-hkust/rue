import { CREATE_PATIENT, QUERY_PATIENT_PROFILE } from './types'

export const createPatient = () => ({
    type: CREATE_PATIENT
})

export const queryPatientProfile = () => ({
    type: QUERY_PATIENT_PROFILE
})
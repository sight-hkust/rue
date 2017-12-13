import { watchAuthentication, watchDeauthentication, watchRegistration } from './auth'
import { watchCreatePatient, watchQueryPatientProfile } from './patient'

export default function* rootSaga() {
  yield [
    watchAuthentication(),
    watchDeauthentication(),
    watchRegistration(),
    watchCreatePatient(),
    watchQueryPatientProfile()
  ]
}
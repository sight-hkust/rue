import { watchAuthentication, watchDeauthentication, watchRegistration } from './auth'
import { watchCreatePatient } from './patient'

export default function* rootSaga() {
  yield [
    watchAuthentication(),
    watchDeauthentication(),
    watchRegistration(),
    watchCreatePatient(),
  ]
}
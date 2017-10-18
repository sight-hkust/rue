import { watchAuthentication, watchDeauthentication, watchRegistration } from './auth'

export default function* rootSaga() {
  yield [
    watchAuthentication(),
    watchDeauthentication(),
    watchRegistration()
  ]
}
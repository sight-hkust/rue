import { call, put, takeLatest } from 'redux-saga/effects'
import api from '../../services/api'
import { AUTH_LOGOUT, AUTH_SUCCESS, AUTH_FAILURE, AUTH_RESET, AUTH_LOGIN, AUTH_REGISTER } from '../action/types'


function* logIn({ payload : { username, password } }) {
  try {
    const { session } = yield call(api.auth.authenticate, username, password)
    localStorage.setItem('token', session)
    yield put({ type: AUTH_SUCCESS, payload: session })
  } catch (error) {
    yield put({ type: AUTH_FAILURE, payload: error.message })
  }
}

function* logOut() {
  try {
    yield call(api.auth.deauthenticate)
    localStorage.removeItem('token')
    yield put({ type: AUTH_RESET })
  } catch(error){
    yield put({ type: AUTH_FAILURE, payload: error.message })
  }
}

function* register({ payload : { credentials, registrationToken } }){
  try {
    const { session } = yield call(api.auth.register, credentials, registrationToken)
    localStorage.setItem('token', session)
    yield put({ type: AUTH_SUCCESS, payload: session})
  } catch (error) {
    yield put({ type: AUTH_FAILURE, payload: error.message })
  }
}

export function* watchAuthentication() {
  yield takeLatest(AUTH_LOGIN, logIn)
}

export function* watchDeauthentication(){
  yield takeLatest(AUTH_LOGOUT, logOut)
}

export function* watchRegistration(){
  yield takeLatest(AUTH_REGISTER, register)
}

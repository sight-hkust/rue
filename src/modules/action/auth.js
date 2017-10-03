import { AUTH_LOGIN, AUTH_LOGOUT, AUTH_REGISTER } from './types'

export const logIn = (username, password) => ({
  type: AUTH_LOGIN,
  payload: { username, password }
})

export const logOut = () => ({
  type: AUTH_LOGOUT
})

export const register = (credentials, registrationToken) => ({
  type: AUTH_REGISTER,
  payload: { credentials, registrationToken }
})
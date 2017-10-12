import { AUTH_RESET, AUTH_FAILURE, AUTH_LOGIN, AUTH_SUCCESS, AUTH_LOGOUT, AUTH_REGISTER } from '../action/types'

const initialState = {
  token: localStorage.getItem('token'),
  error: null
}

const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
  case AUTH_SUCCESS: {
    return { ...state, token: payload }
  }
  case AUTH_FAILURE: {
    return { ...state, error: payload }
  }
  case AUTH_LOGIN: {
    return { ...state }
  }
  case AUTH_RESET:{
    return { ...state }
  }
  case AUTH_LOGOUT:{
    return { ...state }
  }
  case AUTH_REGISTER:{
    return { ...state }
  }
  default:
    return state
  }
}

export default authReducer
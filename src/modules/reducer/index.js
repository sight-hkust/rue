import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import authReducer from './auth'
import patientReducer from './patient'

const reducer = combineReducers({
  router: routerReducer,
  auth: authReducer,
  patientForm: patientReducer,
})

export default reducer
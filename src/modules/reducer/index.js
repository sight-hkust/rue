import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import authReducer from './auth'
import patientReducer from './patient'
import listReducer from './list'

const reducer = combineReducers({
  router: routerReducer,
  auth: authReducer,
  patientForm: patientReducer,
  list: listReducer
})

export default reducer
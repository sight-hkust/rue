import { FETCH_PATIENT_LIST } from 'modules/action/types'

const initialState = {
  patients : []
}

const patients = [
  {id: '123', name: 'kris', age: 20},
  {id: '222', name: 'malinda', age: 25},
  {id: '321', name: 'christine', age: 33},
  {id: '901', name: 'rick', age: 62},
  {id: '109', name: 'morty', age: 13},
  {id: '333', name: 'finn', age: 8},
  {id: '541', name: 'jake', age: 44}
]

const listReducer = (previousState = initialState, { type, payload }) => {
  switch(type){
  case FETCH_PATIENT_LIST: {
    return { patients }
  }
  default: return previousState
  }
}

export default listReducer
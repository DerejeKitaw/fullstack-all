import {createStore, applyMiddleware, combineReducers} from 'redux'
import logger from 'redux-logger'
import thunks from 'redux-thunk'
import axios from 'axios'
import pugs from './pugs'

// const combineReducers = (objOfReducers) => {
//   return (state = {}, action) => {
//     const keys = Object.keys(objOfReducers) // ['pugs']
//     const newState = {...state}
//     keys.forEach(key => {
//       newState[key] = objOfReducers[key](newState[key], action)
//     })
//     return newState
//   }
// }

const reducer = combineReducers({
  pugs
})

const store = createStore(
  reducer,
  applyMiddleware(
    logger,
    thunks
      .withExtraArgument({axios})
  )
)

export default store

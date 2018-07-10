import {createStore, applyMiddleware, combineReducers} from 'redux'
import logger from 'redux-logger'
import thunks from 'redux-thunk'
import axios from 'axios'
import pugsReducer from './pugs'
import bunniesReducer from './bunnies'

const reducer = combineReducers({
  pugs: pugsReducer,
  bunnies: bunniesReducer
})

const store = createStore(
  reducer,
  applyMiddleware(
    thunks.withExtraArgument({
      axios: axios,
      foo: 'bar'
    }),
    logger
  )
)

export default store

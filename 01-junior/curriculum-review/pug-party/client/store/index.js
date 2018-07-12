import {createStore, applyMiddleware, combineReducers} from 'redux'
import logger from 'redux-logger'
import thunks from 'redux-thunk'
import axios from 'axios'
import pugs from './pugs'

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

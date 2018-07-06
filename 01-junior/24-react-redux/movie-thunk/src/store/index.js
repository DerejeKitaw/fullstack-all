import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import axios from 'axios'

const FETCH_MOVIES = "FETCH_MOVIES"
const SET_MOVIES = "SET_MOVIES"
const setMovies = movies => ({ type: SET_MOVIES, movies })

export const createFetchMoviesThunk = (title) => {
  console.log("I am constructing a thunk")

  const URL = `https://www.omdbapi.com/?apikey=8d10cc70&s=${title}`

  return async (thunkMiddlewareSuppliedDispatch) => {
    console.log("I am inside a thunk being called by the THUNK middleware")
    const { data } = await axios.get(URL)
    console.log("AXIOS FINISHED", data.Search)
    thunkMiddlewareSuppliedDispatch(setMovies(data.Search))
  }
}

const reducer = (state = {
  movies: []
}, action) => {
  const nextState = {}

  switch (action.type) {
    case (SET_MOVIES): {
      nextState.movies = action.movies
      return nextState
    }
    default: {
      return state
    }
  }
}

export default createStore(
  reducer,
  applyMiddleware(thunk)
)
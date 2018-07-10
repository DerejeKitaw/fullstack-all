import axios from 'axios'

// ACTION TYPES
export const GOT_BUNNIES = 'GOT_BUNNIES'

// ACTION CREATORS
export const gotBunnies = (bunnies) => {
  return {
    type: GOT_BUNNIES,
    bunnies
  }
}

// THUNK CREATORS
export const fetchBunnies = () => {
  return async (dispatch, getState) => {
    try {
      const {data} = await axios.get('/api/bunnies')
      const action = gotBunnies(data)
      dispatch(action)
    } catch (err) {
      console.log(err)
    }
  }
}

// BUNNIES REDUCER
const initialState = []

const bunniesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GOT_BUNNIES:
      return action.bunnies
    default:
      return state
  }
}

export default bunniesReducer

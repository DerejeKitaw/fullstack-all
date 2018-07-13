// action types
const GOT_PUGS = 'GOT_PUGS'
const GOT_NEW_PUG = 'GOT_NEW_PUG'

// action creators
export const gotPugs = (pugs) => {
  return {
    type: GOT_PUGS,
    pugs
  }
}

export const gotNewPug = (newPug) => {
  return {
    type: GOT_NEW_PUG,
    newPug
  }
}

// thunk creators
export const getPugs = () => {
  return async (dispatch, getState, {axios}) => {
    try {
      const {data} = await axios.get('/api/pugs')
      const gotPugsAction = gotPugs(data)
      dispatch(gotPugsAction)
    } catch (err) {
      console.log(err)
    }
  }
}

export const addPug = (newPugData) => {
  return async (dispatch, getState, {axios}) => {
    try {
      const {data} = await axios.post('/api/pugs', newPugData)
      const newPugAction = gotNewPug(data)
      dispatch(newPugAction)
    } catch (err) {
      console.log(err)
    }
  }
}

// initial state
// const initialPugs = []
const initialPugs = []
// const initialPugs = {
//   listOfPugs: [],
//   isLoading: false,
//   gotError: false
// }

// reducer
const pugsReducer = (state = initialPugs, action) => {
  switch (action.type) {
    case GOT_PUGS:
      // return {
      //   ...state,
      //   isLoading: false,
      //   gotError: false,
      //   listOfPugs: action.pugs
      // }
      return action.pugs
    case GOT_NEW_PUG:
      // state.push(action.newPug) :( :(
      // return state.concat(action.newPug) ;)
      return [...state, action.newPug] // :)
    default:
      return state
  }
}

export default pugsReducer

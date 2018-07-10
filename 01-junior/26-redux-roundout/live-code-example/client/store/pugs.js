// ACTION TYPES
export const LOADING_PUGS = 'LOADING_PUGS'
export const GOT_PUGS = 'GOT_PUGS'
export const PUG_PROBLEM = 'PUG_PROBLEM'

// ACTION CREATORS
export const loadingPugs = () => {
  return {
    type: LOADING_PUGS
  }
}

export const gotPugs = (pugs) => {
  return {
    type: GOT_PUGS,
    pugs
  }
}

export const pugProblem = () => {
  return {
    type: PUG_PROBLEM
  }
}

// THUNK CREATORS
export const fetchPugs = () => {
  return async (dispatch, getState, {axios}) => {
    try {
      // loading...
      const loadingAction = loadingPugs()
      dispatch(loadingAction)

      // fetching...
      const {data} = await axios.get('/api/pugs')

      // got pugs!
      const pugsAction = gotPugs(data)
      dispatch(pugsAction)

    } catch (err) {
      // oh noes!
      const errorAction = pugProblem()
      dispatch(errorAction)
    }
  }
}

// SELECTORS

export const selectPugs = (state) => {
  return state.pugs.list.map(pug => (`${pug.name}, age: ${pug.age}`)),
}

// PUGS REDUCER
const initialState = {
  list: [],
  isLoading: false,
  gotError: false
}

const pugsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING_PUGS:
      return {
        ...state,
        isLoading: true,
        gotError: false
      }
    case GOT_PUGS:
      return {
        ...state,
        list: action.pugs,
        isLoading: false,
        gotError: false
      }
    case PUG_PROBLEM:
      return {
        ...state,
        isLoading: false,
        gotError: true
      }
    default:
      return state
  }
}

export default pugsReducer

const GOT_PUGS = 'GOT_PUGS'

export const gotPugs = (pugs) => {
  return {
    type: GOT_PUGS,
    pugs
  }
}

export const getPugs = () => {
  return async (dispatch, getState, {axios}) => {
    try {
      const {data} = await axios.get('/api/pugs')
      const gotPugsAction = gotPugs(data)
      dispatch(gotPugsAction)
      return 'foo'
    } catch (err) {
      console.log(err)
    }
  }
}

const initialPugs = []
const pugsReducer = (state = initialPugs, action) => {
  switch (action.type) {
    case GOT_PUGS:
      return action.pugs
    default:
      return state
  }
}

export default pugsReducer

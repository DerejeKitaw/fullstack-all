import { createStore } from 'redux'

export const initialState = {
  r: 0,
  g: 0,
  b: 0
}

// ASSUME color = { r: something, g: something, b: something }
const CHANGE_COLOR = 'CHANGE_COLOR'
export const changeColor = (color) => ({ type: CHANGE_COLOR, tacoCat: color })

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_COLOR: {
      return action.tacoCat
    }
    default: {
      return state
    }
  }
}

const store = createStore(reducer)

export default store
import { BUY_ICECREAM, RESTOCK_ICECREAM } from './freezerTypes'

const initialState = {
  iceCreams: 20
}

const freezerReducer = (state = initialState, action) => {
  switch(action.type) {
    case BUY_ICECREAM: return {
      ...state,
      iceCreams: state.iceCreams - 1
    }
    case RESTOCK_ICECREAM: return {
      ...state,
      iceCreams: state.iceCreams + 1
    }
    default: return state
  }
}

export default freezerReducer
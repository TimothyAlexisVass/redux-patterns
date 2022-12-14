import { SELL_CAKE } from './shelfTypes'

const initialState = {
  cakes: 10
}

const shelfReducer = (state = initialState, action) => {
  switch(action.type) {
    case SELL_CAKE: return {
      ...state,
      cakes: state.cakes - action.payload
    }
    default: return state
  }
}

export default shelfReducer

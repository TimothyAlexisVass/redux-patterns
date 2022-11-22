const redux = require('redux')
const reduxLogger = require('redux-logger')

const createStore = redux.createStore
const combineReducers = redux.combineReducers
const applyMiddleware = redux.applyMiddleware
const logger = reduxLogger.createLogger()

const SELL_CAKE = 'SELL_CAKE'
const SELL_ICECREAM = 'SELL_ICECREAM'

function sellCake() {
  return {
    type: SELL_CAKE,
    info: 'First redux action'
  }
}

function sellIceCream() {
  return {
    type: SELL_ICECREAM,
    info: 'Second redux action'
  }
}

const initialCakeState = {
  numberOfCakes: 10
}

const initialIceCreamState = {
  numberOfIceCreams: 20
}

const cakeReducer = (state = initialCakeState, action) => {
  switch(action.type) {
    case SELL_CAKE:
      return {
        ...state,
        numberOfCakes: state.numberOfCakes - 1
      }

    default:
      return state
  }
}

const iceCreamReducer = (state = initialIceCreamState, action) => {
  switch(action.type) {
    case SELL_ICECREAM:
      return {
        ...state,
        numberOfIceCreams: state.numberOfIceCreams - 1
      }

    default:
      return state
  }
}

const rootReducer = combineReducers({
  shelf: cakeReducer,
  freezer: iceCreamReducer
})

const store = createStore(rootReducer, applyMiddleware(logger))
console.log('Initial state', store.getState())
const unsubscribe = store.subscribe(() => {})
store.dispatch(sellCake())
store.dispatch(sellCake())
store.dispatch(sellCake())
store.dispatch(sellIceCream())
store.dispatch(sellIceCream())
store.dispatch(sellIceCream())
unsubscribe()

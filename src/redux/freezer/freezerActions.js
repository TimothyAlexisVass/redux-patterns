import { SELL_ICECREAM, RESTOCK_ICECREAM } from './freezerTypes'

export const sellIceCream = () => {
  return {
    type: SELL_ICECREAM
  }
}

export const restockIceCream = () => {
  return {
    type: RESTOCK_ICECREAM
  }
}

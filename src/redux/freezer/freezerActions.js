import { BUY_ICECREAM, RESTOCK_ICECREAM } from './freezerTypes'

export const sellIceCream = () => {
  return {
    type: BUY_ICECREAM
  }
}

export const restockIceCream = () => {
  return {
    type: RESTOCK_ICECREAM
  }
}

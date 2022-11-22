import { SELL_CAKE } from './shelfTypes'

export const sellCake = (number = 1) => {
  return {
    type: SELL_CAKE,
    payload: number
  }
}

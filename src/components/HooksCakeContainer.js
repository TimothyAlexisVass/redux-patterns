import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { sellCake } from '../redux'

function HooksCakeContainer() {
  const cakes = useSelector(state => state.shelf.cakes)
  const dispatch = useDispatch()
  return (
    <div>
      <h2>Number of cakes: {cakes} </h2>
      <button onClick={() => dispatch(sellCake())}>Sell Cake</button>
    </div >
  )
}

export default HooksCakeContainer

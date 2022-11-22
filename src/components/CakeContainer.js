import React, { useState } from 'react'
import { connect } from 'react-redux'
import { sellCake } from '../redux'

function CakeContainer (props) {
  const [number, setNumber] = useState(1)
  return (
    <div>
      <h2>Number of cakes: {props.cakes} </h2>
      <button onClick={() => props.sellCake(number)}>
        Sell 
        <input
          type='number'
          className="button-embedded-input"
          value={number}
          onClick={event => event.stopPropagation()}
          onChange={event => setNumber(event.target.value)}
        />
        {number > 1 ? "Cakes" : "Cake"}
      </button>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    cakes: state.shelf.cakes
  }
}

const mapDispatchToProps = dispatch => {
  return {
    sellCake: number => dispatch(sellCake(number))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer) 

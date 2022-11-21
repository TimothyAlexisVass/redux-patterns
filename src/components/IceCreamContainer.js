import React from 'react'
import { connect } from 'react-redux'
import { sellIceCream, restockIceCream } from '../redux'

function IceCreamContainer (props) {
  return (
    <div>
      <h2>Number of icecreams: {props.iceCreams} </h2>
      <button onClick={props.sellIceCream}>sell IceCream</button>
      <button onClick={props.restockIceCream}>restock IceCream</button>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    iceCreams: state.freezer.iceCreams
  }
}

const mapDispatchToProps = dispatch => {
  return {
    sellIceCream: () => dispatch(sellIceCream()),
    restockIceCream: () => dispatch(restockIceCream())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer) 

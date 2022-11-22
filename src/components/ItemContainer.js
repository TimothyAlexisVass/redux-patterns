import React from 'react'
import { connect } from 'react-redux'
import { sellCake, sellIceCream } from '../redux'

function ItemContainer(props) {
  return (
    <div>
      <h2>Number of {props.itemName}s: {props.amount}</h2>
      <button onClick={props.sellItem}>Sell {props.itemName}</button>
    </div>
  )
}

const capitalize = string => string.charAt(0).toUpperCase() + string.substring(1).toLowerCase()

const mapStateToProps = (state, ownProps) => {
  const itemLocation = {
    cake: state.shelf,
    iceCream: state.freezer
  }[ownProps.itemType]
  return {
    itemName: capitalize(ownProps.itemType),
    amount: itemLocation[ownProps.itemType+"s"]
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const dispatchFunction = {
    cake: () => dispatch(sellCake()),
    iceCream: () => dispatch(sellIceCream())
  }[ownProps.itemType]

  return {
    sellItem: dispatchFunction
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer)
 
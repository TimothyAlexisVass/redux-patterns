import React from 'react'
import { Provider } from 'react-redux'
import store from './redux/store'
import './App.css'
import CakeContainer from './components/CakeContainer'
import IceCreamContainer from './components/IceCreamContainer'
import ItemContainer from './components/ItemContainer'
// import HooksCakeContainer from './components/HooksCakeContainer'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <div className="bordered-box">
          <h1>Shelf</h1>
          {/* <HooksCakeContainer /> */}
          <CakeContainer />
        </div>
        <div className="bordered-box">
          <h1>Freezer</h1>
          <IceCreamContainer />
        </div>
        <div className="bordered-box">
          <h1>UsingItemContainer</h1>
          <ItemContainer itemType="cake" />
          <ItemContainer itemType="iceCream" />
        </div>
      </div>
    </Provider>
  );
}

export default App

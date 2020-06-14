import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import Counter from './components/Counter'
import counter from './reducers'
import { countUp,countDown } from  './actions' 
 
const store = createStore(counter)
const rootEl = document.getElementById('root')

const rendering = () => ReactDOM.render(
  <Counter
    value={store.getState()}
    onIncrement={() => store.dispatch(countUp())}
    onDecrement={() => store.dispatch(countDown())}
  />,
  rootEl
)

rendering()
store.subscribe(rendering)

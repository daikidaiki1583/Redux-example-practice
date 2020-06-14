import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import Counter from './components/Counter'
import counter from './reducers'
import { countUp,countDown } from  './actions' 
 
const store = createStore(counter)
const rootEl = document.getElementById('root')

const rendering = () => ReactDOM.render(
  <Provider store={store}>
      <Counter
        value={store.getState()}
        onIncrement={() => store.dispatch(countUp())}
        onDecrement={() => store.dispatch(countDown())}
      />
  </Provider>,
  rootEl
)

rendering()
store.subscribe(rendering)

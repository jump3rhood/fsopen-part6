import React from 'react'
import ReactDOM from 'react-dom/client'
import { createStore } from 'redux'
import counterReducer from './reducer'

const store = createStore(counterReducer)

const App = () => {
  const { good, ok, bad } = store.getState()
  return (
    <div>
      <h1>Unicafe Reviews (Redux)</h1>
      <div>
        <button onClick={(e) => store.dispatch({ type: 'GOOD' })}>good</button>
        <button onClick={(e) => store.dispatch({ type: 'OK' })}>ok</button>
        <button onClick={(e) => store.dispatch({ type: 'BAD' })}>bad</button>
        <button onClick={(e) => store.dispatch({ type: 'ZERO' })}>reset stats</button>
      </div>
      <p>good {good}</p>
      <p>ok {ok}</p>
      <p>bad {bad}</p>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

const renderApp = () => root.render(<App/>)


renderApp()
store.subscribe(renderApp)
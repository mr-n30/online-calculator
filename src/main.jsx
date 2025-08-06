import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

const NumberContainer = () => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '.', '=', '+', '-', '*', '/']
  const jsx = numbers.map((num) => (
    <button key={num} className="number-button bg-gray-100" onClick={() => console.log(num)}>
      {num}
    </button>
  ))
  return (
    <div className="number-button-container">
      {jsx}
    </div>
  )
}

const ActionButtonRow = () => {
  return (
    <div className="action-button-row">
      <button className="clear-button">CLEAR</button>
      <button className="delete-button">DELETE</button>
    </div>
  )
}

const Screen = () => {
  return (
    <div className="screen">
      Enter a number
    </div>
  )
}

const Calculator = () => {
  return (
    <div className="calculator">
      <Screen />
      <ActionButtonRow />
      <NumberContainer />
    </div>
  )
}

const App = () => {
  return <Calculator />
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

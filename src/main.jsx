import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { useState } from 'react'


const NumberContainer = ({ setInput }) => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '.', '=', '+', '-', '*', '/']

  const handleClick = (num) => {
    setInput((prev) => {
      // TODO: make this a switch statement
      if (prev === 'Enter a number') {
        return String(num)
      } else if (prev === '0' || prev === '=') { // TODO: add remaining operators
        return String(num)
      }

      return prev + String(num)
    })
  }

  const jsx = numbers.map((num) => (
    <button key={num} className="number-button bg-gray-100" onClick={() => handleClick(num)}>
      {num}
    </button>
  ))

  return (
    <div className="number-button-container">
      {jsx}
    </div>
  )
}

const ActionButtonRow = ({ setInput }) => {
  const handleClear = () => {
    setInput('0')
  }

  return (
    <div className="action-button-row">
      <button className="clear-button" onClick={handleClear}>CLEAR</button>
      <button className="delete-button">DELETE</button>
    </div>
  )
}

const Screen = ({ input }) => {
  console.log(input)
  return (
    <div className="screen">
      {input}
    </div>
  )
}

const Calculator = () => {
  const [input, setInput] = useState('Enter a number')

  return (
    <div className="calculator">
      <Screen input={input} />
      <ActionButtonRow setInput={setInput} />
      <NumberContainer setInput={setInput} />
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

import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { useState } from 'react'
import { evaluate } from 'mathjs';

const NumberContainer = ({ setInput }) => {
  const numbers = [1, 2, 3, '.', 4, 5, 6, '/', 7, 8, 9, '+', '-', 0, '*', '=']

  const handleClick = (num) => {
    setInput((prev) => {
      if (prev === 'Enter a number' || prev === '0') {
        return num.toString()
      } else if (num === '=') {
        try {
          return evaluate(prev)
        } catch (e) {
          console.error(e)
          return 'NaN'
        }
      } else if (num === 'delete') {
        return prev.slice(0, -1) || '0'
      }

      return prev + num.toString()
    })
  }

  const jsx = numbers.map((num, i) => {
    if (num === '=') {
      return (
        <button id={`button-${i}`} key={num} className="number-button bg-blue-500 text-white" onClick={() => handleClick(num)}>
          {num}
        </button>
      )
    }

    return (
      <button id={`button-${i}`} key={num} className="number-button bg-gray-100" onClick={() => handleClick(num)}>
        {num}
      </button>
    )
  })

  return (
    <div className="number-button-container">
      {jsx}
    </div>
  )
}

const ActionButtonRow = ({ setInput }) => {
  const handleClear = () => {
    setInput('Enter a number')
  }

  const handleDelete = () => {
    setInput((prev) => {
      if (prev === 'Enter a number' || prev === '0' || prev === 'NaN') {
        return 'Enter a number'
      }

      return prev.slice(0, -1) || '0'
    })
  }

  return (
    <div className="action-button-row">
      <button className="delete-button" onClick={handleDelete}>DELETE</button> {/* TODO: implement delete */}
      <button className="clear-button" onClick={handleClear}>CLEAR</button>
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

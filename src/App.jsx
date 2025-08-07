import { useState, useRef } from 'react'
import { evaluate } from 'mathjs';
import './index.css'
import soundFile from './assets/audio/button-click-sound.wav'

const NumberContainer = ({ setInput }) => {
  const numbers = [1, 2, 3, '.', 4, 5, 6, '/', 7, 8, 9, '+', '-', 0, '*', '=']

  const handleClick = (num) => {
    const audio = new Audio(soundFile);
    audio.play();

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
  const audio = new Audio(soundFile);

  const handleClear = () => {
    setInput('Enter a number')
    audio.play();
  }

  const handleDelete = () => {
    audio.play();
    setInput((prev) => {
      if (prev === 'Enter a number' || prev === '0' || prev === 'NaN') {
        return 'Enter a number'
      }

      return String(prev).slice(0, -1) || '0'
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
      <p className='text-sm'> &copy; Created by <a target='_blank' href="https://github.com/mr-n30">@mr-n30</a> on GitHub.</p>
    </div>
  )
}

export default function App() {
  return <Calculator />
}

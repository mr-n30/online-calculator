import { useState } from 'react'
import stringMath from 'string-math'


// CSS classes for the button elements
const BUTTONCLASS = "shadow btn-lg btn border border-black";

                                           
export default function App() {            
  const [input, setInput] = useState("0");

  // Function used to generate buttons 0-9
  function genButtonNums() {
    // Styles for the buttons
    const styles = {}

    const numArr = [];
    for (let i = 1; i < 10; i++) {
      numArr.push(i);
    }

    // Return an array of <button> elements
    return numArr.map(buttonNum => (
      <button
        onClick={(e) => setInput(input + e.target.textContent)}
        key={`buttonKey-${buttonNum}`}
        style={styles}
        className={BUTTONCLASS + " btn-primary"}>{buttonNum}
      </button>
    ))
  }

  return (
      <div className="border border-black border-4 rounded calc-box bg-dark bg-gradient">

        {/* User input field / numbers displayed */}
        <input 
          className="border border-black border-4 border-rounded"
          type="text" 
          value={input}
          onChange={(input) => setInput(input.target.value)}
          autoFocus={true}/>

        <div className="container-fluid calc">
        {/* Buttons 0-9 */}
        {genButtonNums()}
        
        {/* 0 and speclial symbols */}
        <button
          onClick={(e) => setInput(input + e.target.textContent)}
          className={BUTTONCLASS + " btn-primary"}>0</button>
        {/* CLEAR */}
        <button
          onClick={() => setInput("")}
          className={BUTTONCLASS + " btn-danger"}>AC</button>
        <button
          onClick={(e) => setInput(input + e.target.textContent)}
          className={BUTTONCLASS + " btn-secondary"}>.</button>


        {/* Other speacial symbols */}
        <button onClick={(e) => setInput(input + e.target.textContent)} className={BUTTONCLASS + " btn-secondary"}>(</button>
        <button onClick={(e) => setInput(input + e.target.textContent)} className={BUTTONCLASS + " btn-secondary"}>)</button>
        <button onClick={(e) => setInput(input + e.target.textContent)} className={BUTTONCLASS + " btn-secondary"}>%</button>
        </div>

        {/* Math Buttons */}
        <div className="math-buttons-box container">
          <button onClick={(e) => setInput(input + e.target.textContent)} className={BUTTONCLASS + " btn-dark btn-outline-warning"}>+</button>
          <button onClick={(e) => setInput(input + e.target.textContent)} className={BUTTONCLASS + " btn-dark btn-outline-warning"}>-</button>
          <button onClick={(e) => setInput(input + e.target.textContent)} className={BUTTONCLASS + " btn-dark btn-outline-warning"}>/</button>
          <button onClick={(e) => setInput(input + e.target.textContent)} className={BUTTONCLASS + " btn-dark btn-outline-warning"}>*</button>
        </div>

        {/* Sum */}
        <button onClick={() => {
            try {
              return setInput(stringMath(input));
            } catch(SyntaxError) {
              return setInput("Inavlid syntax");
            }
          }}
          className={BUTTONCLASS + " btn-warning btn-eq"}>=</button>

        {/* Footer */}
        <footer className="text-warning border border-black border-4 bg-dark rounded rounded-5 tape">&copy;Created by: <a href="#">mr-n30</a>. Source code on <a href="#">GitHub</a></footer>
      </div>
  )
}


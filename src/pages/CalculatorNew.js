import React, { useState } from 'react'
function CalculatorNew() {
  let [inputValue, setInputValue] = useState("")
  let input = 0

  return (
    <div className='Main-new-calculator'>
      <div className='phone-new-calculator'>
        <div className='Container-new-0'>
          <div className='N-C-circle'></div>
          <dic className='N-C-bar'></dic>
        </div>
        <div className='Container-new2-calculator'>
          <i class="fa fa-wifi" aria-hidden="true"></i>
          <label>11:11</label>
        </div>
        <div className='Container-new-calculator'>{inputValue}</div>
        <div className='Container2-new-calculator'>
          <div className='inner-container-2'>
            <div className='buttons-new-calculator'>
              <button onClick={() => setInputValue(inputValue + "7")} className='N1'>7</button>
              <button onClick={() => setInputValue(inputValue + "8")} className='N1'>8</button>
              <button onClick={() => setInputValue(inputValue + "9")} className='N1'>9</button>
            </div>

            <div className='buttons-new-calculator'>
              <button onClick={() => setInputValue(inputValue + "4")} className='N1'>4</button>
              <button onClick={() => setInputValue(inputValue + "5")} className='N1'>5</button>
              <button onClick={() => setInputValue(inputValue + "6")} className='N1'>6</button>
            </div>

            <div className='buttons-new-calculator'>
              <button onClick={() => setInputValue(inputValue + "1")} className='N1'>1</button>
              <button onClick={() => setInputValue(inputValue + "2")} className='N1'>2</button>
              <button onClick={() => setInputValue(inputValue + "3")} className='N1'>3</button>
            </div>

            <div className='buttons-new-calculator'>
              <button onClick={() => setInputValue(inputValue + ".")} className='N1'>.</button>
              <button onClick={() => setInputValue(inputValue + "0")} className='N1'>0</button>
              <button onClick={() => setInputValue(eval(inputValue))} className='N1'>=</button>
            </div>

          </div>
          <div className='inner1-container-2'>
            <div className='buttons-new2-calculator'>
              <button onClick={() => setInputValue("")} className='N2'>DEL</button>
              <button onClick={() => setInputValue(inputValue + "/")} className='N2'>÷</button>
              <button onClick={() => setInputValue(inputValue + "*")} className='N2'>×</button>
              <button onClick={() => setInputValue(inputValue + "-")} className='N2'>-</button>
              <button onClick={() => setInputValue(inputValue + "+")} className='N2'>+</button>
            </div>
          </div>
          <div className='inner2-container-2'></div>
        </div>
        <div className='Container-new-3'>
          <i class="new-calci-icon-1 fa fa-caret-left" aria-hidden="true"></i>
          <i class="fa fa-circle" aria-hidden="true"></i>
          <i class="fa fa-square" aria-hidden="true"></i>

        </div>
      </div>
      <div className='absolute bottom-0 text-black '>Made with ❤️ By Palash</div>
    </div>
  )
}


export default CalculatorNew
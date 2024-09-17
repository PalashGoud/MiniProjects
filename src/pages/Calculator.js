import React, { useState } from 'react'

function Calculator() {
  let [inputValue, setInputValue] = useState("")
  let input = 0

  return (
    <div className='Main-calculator'>
      <div className='phone-calculator'>
        <div className='p-1'>
          <div className='pp-1'>
            <label>11:11</label>
          </div>
          <div className='pp-2'></div>
          <div className='pp-3'>
            <i class="fa fa-signal" aria-hidden="true"></i>
            <i class="fa fa-wifi" aria-hidden="true"></i>
            <i class="fa fa-battery-three-quarters" aria-hidden="true"></i>
          </div>
        </div>
        <div className='Container-calculator'>{inputValue}</div>
        <div className='Container-1-calculator'>
          <div className='buttons-calculator'>
            <button onClick={() => setInputValue("")} className='b-g'>AC</button>
            <button onClick={() => setInputValue(inputValue.slice(0, inputValue.length - 1))} className='b-g'>←</button>
            <button onClick={() => setInputValue(inputValue + "%")} className='b-g'>%</button>
            <button onClick={() => setInputValue(inputValue + "/")} className='b-y'>÷</button>
          </div>
          <div className='buttons-calculator'>
            <button onClick={() => setInputValue(inputValue + "7")} className='b-1'>7</button>
            <button onClick={() => setInputValue(inputValue + "8")} className='b-1'>8</button>
            <button onClick={() => setInputValue(inputValue + "9")} className='b-1'>9</button>
            <button onClick={() => setInputValue(inputValue + "*")} className='b-y'>×</button>
          </div>
          <div className='buttons-calculator'>
            <button onClick={() => setInputValue(inputValue + "4")} className='b-1'>4</button>
            <button onClick={() => setInputValue(inputValue + "5")} className='b-1'>5</button>
            <button onClick={() => setInputValue(inputValue + "6")} className='b-1'>6</button>
            <button onClick={() => setInputValue(inputValue + "-")} className='b-y'>-</button>
          </div>
          <div className='buttons-calculator'>
            <button onClick={() => setInputValue(inputValue + "1")} className='b-1'>1</button>
            <button onClick={() => setInputValue(inputValue + "2")} className='b-1'>2</button>
            <button onClick={() => setInputValue(inputValue + "3")} className='b-1'>3</button>
            <button onClick={() => setInputValue(inputValue + "+")} className='b-y'>+</button>
          </div>
          <div className='buttons-calculator'>
            <button onClick={() => setInputValue(inputValue + "0")} className='b-0'>0</button>
            <button className='b-1'>.</button>
            <button onClick={() => setInputValue(eval(inputValue))} className='b-y'>=</button>
          </div>
        </div>
        <div className='lastline-calculator'></div>
      </div>
      <div className='absolute bottom-0 text-white '>Made with ❤️ By Palash</div>
    </div>
  )
}

export default Calculator
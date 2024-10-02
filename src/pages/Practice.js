import React, { useContext } from 'react'
import { MyData } from './Context1'

function Practice() {
  const {name, click, setClick} = useContext(MyData)
  return (
    <div>
      <button onClick={()=> setClick(click+1)}>{click}</button>
    </div>
  )
}

export default Practice
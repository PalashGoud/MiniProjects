import React, {createContext, useRef, useState} from 'react'

export const MyData = createContext()

function Context1({children}) {
  let name = "CodingShaala"

  const [click, setClick] = useState(0)
  return (
    <MyData.Provider value={{name, click, setClick}}>
      {children}
    </MyData.Provider>
  )
}

export default Context1
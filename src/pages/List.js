import React from 'react'

function List({mydata}) {
  return (
    <div>{mydata.map((i)=>
    <li>{i}</li>
    )}</div>
  )
}

export default List
import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Todo() {
    useEffect(()=>{
        getData()
    }, [])
    const [todoObj, setTodoObj] = useState({})
    const postData =()=>{
        axios.post("http://localhost:5001/api/todo", todoObj).then(
            (res)=>{console.log(res); getData()},
            (err)=>{console.log(err)}
        )
    }

    const [todoList, setTodoList] = useState([])
    const getData = ()=>{
        axios.get("http://localhost:5001/api/todo").then(
            (res)=> setTodoList(res.data.data)
        )
    }
  return (
    <div>
        {JSON.stringify(todoList)}
        <div className='flex gap-20'>
            <input onChange={(e)=> setTodoObj({...todoObj ,title: e.target.value})} placeholder='title'></input>
            <input onChange={(e)=> setTodoObj({...todoObj ,description: e.target.value})} placeholder='description'></input>
            <button onClick={()=>postData()}>Submit</button>
        </div>
        <table>
            <thead>
                <th>
                    <td>S no</td>
                    <td>Title</td>
                    <td>Description</td>
                </th>
            </thead>
            <tbody>
                {todoList.map((i, index)=>
                <tr>
                    <td>{index+1}.</td>
                    <td>{i.title}</td>
                    <td>{i.description}</td>
                </tr>)}
            </tbody>
        </table>
    </div>
  )
}

export default Todo
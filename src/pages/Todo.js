import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Todo() {
    useEffect(()=>{
        getData()
    }, [])
    const [todoObj, setTodoObj] = useState("")
    const postData =()=>{
        axios.post("http://localhost:5001/api/todo", todoObj).then(
            (res)=>{console.log(res); setTodoObj({title:"", description:""}); getData()},
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
        {/* {JSON.stringify(todoList)} */}
        <div className='flex gap-20'>
            <input value={todoObj.title} onChange={(e)=> setTodoObj({...todoObj ,title: e.target.value})} placeholder='title'></input>
            <input value={todoObj.description} onChange={(e)=> setTodoObj({...todoObj ,description: e.target.value})} placeholder='description'></input>
            <button onClick={()=>postData()}>Submit</button>
        </div>
        <table>
            <thead>
                
                    <th className='border'>S no</th>
                    <th className='border'>Title</th>
                    <th className='border'>Description</th>
                
            </thead>
            <tbody>
                {todoList.map((i, index)=>
                <tr>
                    <td className='border px-4'>{index+1}.</td>
                    <td className='border px-4'>{i.title}</td>
                    <td className='border px-4'>{i.description}</td>
                </tr>)}
            </tbody>
        </table>
    </div>
  )
}

export default Todo
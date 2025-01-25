import React, { useState } from 'react'
function PracticeTodo() {
  const [list, setList] = useState([])
  const [data, setData] = useState({ name: "", collage: "", number: "" })

  const handleForm = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  const handleSubmit = () => {
      setList([...list, data])
      setData({name:"",collage:"",number:""})

  }

  const handleDelete =(index)=>{
    const updatedList = [...list]
    updatedList.splice(index, 1)
    setList(updatedList)
  }
  
  const [newIndex,setnewIndex] = useState("")

  const handleUpdate=()=>{
    let newList = list
    newList.splice(newIndex,1,data)
    setList(newList)
  }
 
 

  return (
    <div className="relative flex flex-col items-center justify-start min-h-screen bg-gradient-to-br from-[#3b82f6] via-[#6b21a8] to-[#c026d3] p-6">
      <div className="flex flex-col items-center bg-gradient-to-r from-[#1B193F] to-[#232259] rounded-3xl shadow-2xl w-[85%] md:w-[60%] lg:w-[50%] p-10 transition-all ease-in-out duration-500">
        <div className="flex flex-col md:flex-row gap-6 mb-8 w-full">
          <input name="name" value={data.name}
          className="border border-transparent rounded-lg px-6 py-3 text-lg outline-none bg-white shadow-lg hover:shadow-xl focus:shadow-2xl transition-all duration-300 focus:ring-4 focus:ring-blue-400 w-full"
            onChange={(e)=> handleForm(e)}
            placeholder="Enter  Name"/>

          <input name="collage" value={data.collage}
            className="border border-transparent rounded-lg px-6 py-3 text-lg outline-none bg-white shadow-lg hover:shadow-xl focus:shadow-2xl transition-all duration-300 focus:ring-4 focus:ring-purple-400 w-full"
            onChange={(e)=>handleForm(e)}
            placeholder="Enter Collage"/>

          <input
            name="number" value={data.number}
            className="border border-transparent rounded-lg px-6 py-3 text-lg outline-none bg-white shadow-lg hover:shadow-xl focus:shadow-2xl transition-all duration-300 focus:ring-4 focus:ring-purple-400 w-full"
            onChange={(e)=> handleForm(e)}
            placeholder="Enter Number"
          />
        </div>

        <div className="flex justify-center space-x-4">
          <button
            className="bg-gradient-to-r from-[#38bdf8] via-[#3b82f6] to-[#6366f1] text-white px-8 py-3 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 transform hover:bg-gradient-to-l hover:from-[#6366f1] hover:to-[#38bdf8]"
            onClick={(e)=> handleSubmit(e)}
          >
            Submit
          </button>

          <button className="bg-gradient-to-r from-[#38bdf8] via-[#3b82f6] to-[#6366f1] text-white px-8 py-3 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 transform hover:bg-gradient-to-l hover:from-[#6366f1] hover:to-[#38bdf8]"
            onClick={(e)=> handleUpdate(e)} >
            Update
          </button>

        </div>

       
          <div className="w-full mt-8 overflow-x-auto">
            <table className="min-w-full table-auto text-white">
              <thead className="bg-gradient-to-r from-[#4f46e5] via-[#4338ca] to-[#3730a3]">
                <tr className="text-left">
                  <th className="px-6 py-3 font-semibold">S. No</th>
                  <th className="px-6 py-3 font-semibold">Name</th>
                  <th className="px-6 py-3 font-semibold">Company</th>
                  <th className="px-6 py-3 font-semibold">Modal</th>
                  <th className="px-6 py-3 font-semibold">Delete</th>
                  <th className="px-6 py-3 font-semibold">Edit</th>
                </tr>
              </thead>


              <tbody>
                {list.map((i, index) => (
                  <tr key={index}className="hover:bg-gradient-to-r from-[#6b21a8] via-[#a855f7] to-[#c026d3] transition-colors duration-300 ease-in-out"
                  >
                    <td className="px-6 py-4 text-center">{index + 1}</td>
                    <td className="px-6 py-4 text-center">{i.name}</td>
                    <td className="px-6 py-4 text-center">{i.collage}</td>
                    <td className="px-6 py-4 text-center">{i.number}</td>
                    <td className="px-6 py-4 text-center text-red-500 cursor-pointer hover:text-red-700 transition-colors"
                    onClick={(e)=>handleDelete(e)} >
                      Delete
                    </td>
                    <td className="px-6 py-4 text-center text-red-500 cursor-pointer hover:text-red-700 transition-colors"
                    onClick={(e)=>setData(i)} >
                      Edit
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
      </div>
    </div>
  );
}

export default PracticeTodo;

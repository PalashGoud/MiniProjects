import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Todo() {
    useEffect(() => {
        getData();
    }, []);

    const [todoObj, setTodoObj] = useState({ title: "", description: "" });
    const [todoList, setTodoList] = useState([]);
    const [id, setId] = useState("");

    const postData = () => {
        axios.post("http://localhost:5001/api/todo", todoObj).then(
            (res) => {
                console.log(res);
                setTodoObj({ title: "", description: "" });
                getData();
            },
            (err) => {
                console.log(err);
            }
        );
    };

    const getData = () => {
        axios.get("http://localhost:5001/api/todo").then(
            (res) => setTodoList(res.data.data)
        );
    };

    const deleteFn = (id) => {
        axios.delete(`http://localhost:5001/api/todo/${id}`).then(() => getData());
    };

    const updateData = () => {
        axios.put(`http://localhost:5001/api/todo/${id}`, todoObj).then(() => {
            getData();
            setId("");
            setTodoObj({ title: "", description: "" });
        });
    };

    return (
        <div className="relative flex flex-col items-center justify-start min-h-screen bg-gradient-to-br from-[#3b82f6] via-[#6b21a8] to-[#c026d3] p-6">
            <h1 className="text-white text-5xl font-extrabold tracking-wider mt-4 mb-10">
                MY TO-DO LIST
            </h1>
            
            <div className="flex flex-col items-center bg-gradient-to-r from-[#1B193F] to-[#232259] rounded-3xl shadow-2xl w-[85%] md:w-[60%] lg:w-[50%] p-10 transition-all ease-in-out duration-500">
                {/* Input fields */}
                <div className="flex flex-col md:flex-row gap-6 mb-8 w-full">
                    <input
                        className="border border-transparent rounded-lg px-6 py-3 text-lg outline-none bg-white shadow-lg hover:shadow-xl focus:shadow-2xl transition-all duration-300 focus:ring-4 focus:ring-blue-400 w-full"
                        value={todoObj.title}
                        onChange={(e) => setTodoObj({ ...todoObj, title: e.target.value })}
                        placeholder="Enter Title"
                    />
                    <input
                        className="border border-transparent rounded-lg px-6 py-3 text-lg outline-none bg-white shadow-lg hover:shadow-xl focus:shadow-2xl transition-all duration-300 focus:ring-4 focus:ring-purple-400 w-full"
                        value={todoObj.description}
                        onChange={(e) => setTodoObj({ ...todoObj, description: e.target.value })}
                        placeholder="Enter Description"
                    />
                </div>

                <div className="flex justify-center space-x-4">
                    {id === "" ? (
                        <button
                            className="bg-gradient-to-r from-[#38bdf8] via-[#3b82f6] to-[#6366f1] text-white px-8 py-3 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 transform hover:bg-gradient-to-l hover:from-[#6366f1] hover:to-[#38bdf8]"
                            onClick={() => postData()}
                        >
                            Submit
                        </button>
                    ) : (
                        <button
                            className="bg-gradient-to-r from-[#f59e0b] via-[#f97316] to-[#ef4444] text-white px-8 py-3 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 transform hover:bg-gradient-to-l hover:from-[#ef4444] hover:to-[#f59e0b]"
                            onClick={() => updateData()}
                        >
                            Update
                        </button>
                    )}
                </div>

                {/* Table for Todos */}
                <div className="w-full mt-8 overflow-x-auto">
                    <table className="min-w-full table-auto text-white">
                        <thead className="bg-gradient-to-r from-[#4f46e5] via-[#4338ca] to-[#3730a3]">
                            <tr className="text-left">
                                <th className="px-6 py-3 font-semibold">S. No</th>
                                <th className="px-6 py-3 font-semibold">Title</th>
                                <th className="px-6 py-3 font-semibold">Description</th>
                                <th className="px-6 py-3 font-semibold">Delete</th>
                                <th className="px-6 py-3 font-semibold">Edit</th>
                            </tr>
                        </thead>
                        <tbody>
                            {todoList.map((i, index) => (
                                <tr
                                    key={i._id}
                                    className="hover:bg-gradient-to-r from-[#6b21a8] via-[#a855f7] to-[#c026d3] transition-colors duration-300 ease-in-out"
                                >
                                    <td className="px-6 py-4 text-center">{index + 1}</td>
                                    <td className="px-6 py-4 text-center">{i.title}</td>
                                    <td className="px-6 py-4 text-center">{i.description}</td>
                                    <td
                                        className="px-6 py-4 text-center text-red-500 cursor-pointer hover:text-red-700 transition-colors"
                                        onClick={() => deleteFn(i._id)}
                                    >
                                        🗑️
                                    </td>
                                    <td
                                        className="px-6 py-4 text-center text-blue-500 cursor-pointer hover:text-blue-700 transition-colors"
                                        onClick={() => {
                                            setTodoObj({ title: i.title, description: i.description });
                                            setId(i._id);
                                        }}
                                    >
                                        ✏️
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className='absolute bottom-0 text-black '>Made with ❤️ By Palash</div>
        </div>
    );
}

export default Todo;

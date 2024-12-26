import React from 'react'
import '../todo.css'
import { useState } from 'react'
const Todo = () => {
    const [todos,setTodos] = useState([]);
    const [input,setInput] = useState("");
    const removetodo=(id)=>{
        setTodos((todo)=>{
            return todo.filter((t)=> t.id!==id);
        })
    }
    

  return (
    <div className='container'>
        <input type='text' value={input} placeholder='input todo' onChange={( e)=>{ setInput(e.target.value)}} />
        <button onClick={()=>{setTodos((todos)=>{
            setInput("");
             return todos.concat({
                text : input,
                id: Math.floor(Math.random()*10)   // add a new object to the array
            })
        })}}>add</button>

        <ul className="todos-list">
            {todos.map((todo)=>(
                <li className="todo" key={todo.id}>
                    <span>{todo.text}</span>
                    <button className='close' onClick={()=>{removetodo(todo.id)}}>x</button>
                </li>
            ))}
        </ul>
        </div>
  )
}

export default Todo
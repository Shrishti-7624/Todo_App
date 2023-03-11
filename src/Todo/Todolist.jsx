import React from 'react'
import TodoInputForm from './TodoInputForm'
import '../css/Todolist.css'


const Todolist = () => {
  return (
    <>
    <div className='todo_heading'>
        <h2 className='heading'>Todo List using Redux Toolkit</h2>
        <TodoInputForm/>
        

        </div>
        
        
        </>
  )
}

export default Todolist
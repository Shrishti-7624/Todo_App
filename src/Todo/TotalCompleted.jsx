import React from 'react'
import { useSelector } from 'react-redux'

const TotalCompleted = () => {
    const completedTodo = useSelector((state)=>state.todoSlice.filter((todo)=>todo.completed===true));
  return (
    <div>
        <h3>Total Completed task are {completedTodo.length}</h3>
    </div>
  )
}

export default TotalCompleted
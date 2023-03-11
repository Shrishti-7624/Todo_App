import React from 'react';
import { useDispatch } from 'react-redux';
import TotalCompleted from './TotalCompleted'
import { toogleComplete , deleteTodo } from '../redux/slice/TodoSlice';


const TodoItem = ({id, title, completed}) => {
    const dispatch = useDispatch();
    const handleChange=(e)=>{
        e.preventDefault();
        dispatch(toogleComplete({id:id, completed : !completed}))
    }
    const handleDelete=()=>{
        dispatch(deleteTodo({id:id}))

    }
  return (
    <div>
        <ul>
            <li className='list'     >
        
          
            <input type='checkbox' checked={completed} onChange={handleChange}/>
            <h4>{title}</h4>
            <button onClick={handleDelete}>Delete</button>
           
            </li>

        </ul>
        
        
       
      <TotalCompleted/>
    </div>
  )
}

export default TodoItem

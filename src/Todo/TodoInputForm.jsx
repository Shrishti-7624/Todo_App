import React , {useState} from 'react';
import { addTodo } from '../redux/slice/TodoSlice';
import { useDispatch } from 'react-redux';
import DisplayTodoItem from './DisplayTodoItem';
import '../css/TodoInputForm.css'

const TodoInputForm = () => {
 
    const [data , setData] = useState('');
    const dispatch = useDispatch();
    const handleSubmit= (e)=>{
        e.preventDefault();
        dispatch(addTodo({
            title: data,
        }))
        setData('')

    }
  return (
    <>
      <div className='todo_input'>
        <div className='inner_input'>
        <input className='input'
        type='text' value={data} onChange={(e)=>setData(e.target.value)}/>
        <button onClick={handleSubmit}>Add Task</button>
        </div>
      
        <DisplayTodoItem/>
      </div>
    </>
  )
}

export default TodoInputForm

import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name:"todoSlice",
    initialState:[
    
    ],
    reducers:{
        addTodo: (state, action)=>{
            const newTodo ={
                id : Date.now(),
                title: action.payload.title.toString(),
                completed:false

            };
            state.push(newTodo)

        },
        toogleComplete:(state, action)=> {
                const index = state.findIndex((todo)=> todo.id === action.payload.id)
                state[index].completed = action.payload.completed
        },
        deleteTodo: (state, action) => {
            return state.filter((todo) => todo.id !== action.payload.id);
          }

    }
})
export default todoSlice;
export const {addTodo, toogleComplete , deleteTodo} = todoSlice.actions;
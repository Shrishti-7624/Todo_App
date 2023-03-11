import React from "react";
import { useSelector } from "react-redux";

import TodoItem from "./TodoItem";

const DisplayTodoItem = () => {
  const todoItems = useSelector((state) => state.todoSlice);

  return (
    <>
      <div>
        {todoItems.map((todo) => {
          return (
            <>
              <TodoItem
                id={todo.id}
                title={todo.title}
                completed={todo.completed}
              />
            </>
          );
        })}
      
      </div>
    </>
  );
};

export default DisplayTodoItem;

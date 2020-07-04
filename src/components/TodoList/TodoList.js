import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// Step7: import the slice functions you want
import { addTodo, deleteTodo, selectTodos } from '../Stores/TodoSlice';

export function TodoList() {
	// Step8: Write this line to access information from the store
  const todos = useSelector(selectTodos);
  const dispatch = useDispatch();

  console.log(todos)

  return (
    <div>
      {todos.map( (item,index) => {
      	return <div 
      	key={index} 
      	// Step9: Dispatch is used to call a slice function, and the param is passed in... oddly it becomes the 2nd param (afer state) in the slice function
      	onClick={()=>{dispatch(deleteTodo(index))}}>
      		{item}
      	</div>
      })}
    </div>
  );
}

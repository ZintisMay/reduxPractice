import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './TodoList.module.css'
// Step7: import the slice functions you want
import { addTodo, deleteTodo, crossOutTodo,selectTodos } from '../Stores/TodoSlice';

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
      	className={item.done ? styles.strike : null}
      	onClick={()=>{dispatch(crossOutTodo(index))}}
      	// Step9: Dispatch is used to call a slice function, and the param is passed in... oddly it becomes the 2nd param (afer state) in the slice function
      	>
      		{item.text}
      		<span onClick={()=>{dispatch(deleteTodo(index))}}>&#9421;</span>
      	</div>
      })}
    </div>
  );
}

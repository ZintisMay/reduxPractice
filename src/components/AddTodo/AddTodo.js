import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo } from '../Stores/TodoSlice';

export function AddTodo() {
  //Need to include dispatch
  const dispatch = useDispatch();
  // React Hook
  const [newTodo, setNewTodo] = useState("")

  useEffect(() => {
    // Update the document title using the browser API
    console.log(newTodo)
  });

  return (
    <div>
  {/* Updates the local hook state */}
      <input onChange={(e)=>{setNewTodo(e.target.value)}} type="text" value={newTodo}/>
    {/* dispatches another function that updates the TodoSlice state */}
      <input type="submit" onClick={()=>{dispatch(addTodo(newTodo))}}/>
    </div>
  );
}

// Step3: create a reducer file
import { createSlice } from '@reduxjs/toolkit';

//Create a slice that will initialize this portion of the store
export const TodoSlice = createSlice({
  name: 'todos',
  //Starting state goes here
  initialState: {
    list:['1','2','3']
  },
  //Methods you can call go here
  reducers: {
    //Methods MUST accept state as first argument. Opetionally "action" as second argument
    deleteTodo:(state, action) => {
      //Action.payload is the value you pass into delteTodo when you call it
      state.list.splice(action.payload,1)
    },
    addTodo: (state, action) => {
      console.log(state)
      state.list.push(action.payload)
    }
  },
});

// Export the reducers here
export const { addTodo, deleteTodo } = TodoSlice.actions;

//Step6: make sure that this "selector" returns a key that matches your configureStore reducer keys... followed by the initialState value you want to get
export const selectTodos = (state) => state.todos.list;

//Export the whole thing here... this goes to the store.js
export default TodoSlice.reducer;

// Step3: create a reducer file
import { createSlice } from '@reduxjs/toolkit';

//Create a slice that will initialize this portion of the store
export const TodoSlice = createSlice({
  name: 'todos',
  //Starting state goes here
  initialState: {
    list:[
      {text:"asdf",done:false},
      {text:"asdf",done:false},
      {text:"asdf",done:false}
    ]
  },
  //Methods you can call go here
  reducers: {
    //Methods MUST accept state as first argument. Opetionally "action" as second argument
    crossOutTodo:(state, action) => {
      //The click hits both child (delete) and parent (crossout) on click... needs to check to make sure item is still there
      if(state.list[action.payload]){
        state.list[action.payload].done = !state.list[action.payload].done
      }
    },
    deleteTodo:(state, action) => {
      //Action.payload is the value you pass into delteTodo when you call it
      state.list.splice(action.payload,1)
    },
    addTodo: (state, action) => {
      console.log("action",action)
      state.list.push({text: action.payload, done:false})
    }
  },
});

// Export the reducers here
export const { addTodo, deleteTodo, crossOutTodo } = TodoSlice.actions;

//Step6: make sure that this "selector" returns a key that matches your configureStore reducer keys... followed by the initialState value you want to get
export const selectTodos = (state) => state.todos.list;

//Export the whole thing here... this goes to the store.js
export default TodoSlice.reducer;

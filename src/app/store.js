// Step4: Require configureStore and bring in the default export reducers
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../components/Stores/CounterSlice';
import todoReducer from '../components/Stores/TodoSlice';

//Step5: Pass them in, and name them. The names are IMPORTANT
//These names are how you need to refer to them in your selector
export default configureStore({
  reducer: {
    todos: todoReducer,
    counter: counterReducer,
  },
});

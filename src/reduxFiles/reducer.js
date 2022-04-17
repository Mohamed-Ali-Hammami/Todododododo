//in this file will define our initiatlState as well as all the reducer functions

//createSlice is a function that accepts (initialState, reducerFunctions, sliceName) as inputs
//and automatically generates actions creators & types that correspond to the reducers & state
import { createSlice } from "@reduxjs/toolkit";

const initialState = [];
//addTodoReducer = todoReducers
const todoReducers = createSlice({
  //this is our slice name
  name: "todos",
  //our initial state
  initialState,
  //here we're gonna define all of our reducer function
  reducers: {
    //adding todos
    addTodos: (state, action) => {
      //   state.push(action.payload);
      //   return state;
      return [...state, action.payload];
    },
    //remove todos
    removeTodos: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
    //edit todos
    editTodos: (state, action) => {
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            item: action.payload.item,
          };
        }
        return todo;
      });
    },
    //the complete action
    completeTodos: (state, action) => {
      return state.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            completed: true,
          };
        }
        return todo;
      });
    },
  },
});

//we export all our actions and reducer
export const { addTodos, removeTodos, editTodos, completeTodos } =
  todoReducers.actions;
export const reducer = todoReducers.reducer;

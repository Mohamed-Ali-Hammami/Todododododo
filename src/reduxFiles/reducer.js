
import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const todoReducers = createSlice({

  name: "todos",

  initialState,
 
  reducers: {
 

    addTodos: (state, action) => {


      return [...state, action.payload];
    },


    removeTodos: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },


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


export const { addTodos, removeTodos, editTodos, completeTodos } =
  todoReducers.actions;
export const reducer = todoReducers.reducer;

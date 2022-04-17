import React, { useState } from "react";
import { connect } from "react-redux";
import {
  addTodos,
  removeTodos,
  editTodos,
  completeTodos,
} from "../reduxFiles/reducer";
import TodoCard from "./TodoCard";

const mapStateToProps = (state) => {
  return {
    todos: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (obj) => dispatch(addTodos(obj)),
    removeTodo: (id) => dispatch(removeTodos(id)),
    editTodo: (obj) => dispatch(editTodos(obj)),
    completeTodo: (id) => dispatch(completeTodos(id)),
  };
};

const DisplayTodos = ({ todos, removeTodo, editTodo, completeTodo }) => {
  const [sort, setSort] = useState("active");
  return (
    <div className="dispalytodos">
      <div className="buttons">
        <button onClick={() => setSort("all")}>All</button>
        <button onClick={() => setSort("active")}>Active</button>
        <button onClick={() => setSort("completed")}>Completed</button>
      </div>
      <ul>
        {/* for the active items, when click the active button we 
        gonna display those with completed: false  */}
        {todos.length > 0 && sort === "active"
          ? todos.map((item) => {
              return (
                item.completed === false && (
                  <TodoCard
                    key={item.id}
                    todoItem={item}
                    removeTodo={removeTodo}
                    editTodo={editTodo}
                    completeTodo={completeTodo}
                  />
                )
              );
            })
          : null}
        {/* for the completed items, when click the completed button we 
        gonna display those with completed: true */}
        {todos.length > 0 && sort === "completed"
          ? todos.map((item) => {
              return (
                item.completed === true && (
                  <TodoCard
                    key={item.id}
                    todoItem={item}
                    removeTodo={removeTodo}
                    editTodo={editTodo}
                    completeTodo={completeTodo}
                  />
                )
              );
            })
          : null}
        {/*  to display all the items we don't need the complete boolean */}
        {todos.length > 0 && sort === "all"
          ? todos.map((item) => (
              <TodoCard
                key={item.id}
                todoItem={item}
                removeTodo={removeTodo}
                editTodo={editTodo}
                completeTodo={completeTodo}
              />
            ))
          : null}
      </ul>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(DisplayTodos);

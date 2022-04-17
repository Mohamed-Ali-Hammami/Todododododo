import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodos } from "../reduxFiles/reducer";
import { GoPlus } from "react-icons/go";

const mapStateToProps = (state) => {
  return {
    todos: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (obj) => dispatch(addTodos(obj)),
  };
};

const Todos = ({ addTodo }) => {


  const [todo, setTodo] = useState("");



  const handleChange = (e) => {
    const newTodo = e.target.value;
    setTodo(newTodo);
  };

  const objTodo = {
    id: Math.floor(Math.random() * 1000),
    item: todo,

    completed: false,
  };


  const handleAddClick = () => {
    if (todo === "") {
      alert("type something first");
    } else {
      addTodo(objTodo);
      setTodo("");
    }
  };

  return (
    <div className="addTodos">
      <input
        onChange={(e) => handleChange(e)}
        className="todo-input"
        type="text"
        value={todo}
      />
      <button
        className="add-btn"
        onClick={() => handleAddClick()}
        type="button"
      >
        <GoPlus />
      </button>
    </div>
  );
};


export default connect(mapStateToProps, mapDispatchToProps)(Todos);

import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodos } from "../reduxFiles/reducer";
import { GoPlus } from "react-icons/go";

//the mapStateToProps returns a state & pass it to the component
const mapStateToProps = (state) => {
  return {
    todos: state,
  };
};

//the mapDispatchToProps returns an action & pass it to the component
//and allow the component to sent messages to the store for updates
const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (obj) => dispatch(addTodos(obj)),
  };
};

const Todos = ({ addTodo }) => {
  //console.log("props from store", props);

  //hook state for the input field
  const [todo, setTodo] = useState("");
  //   console.log("todo text", todo);

  //handle change function for the input
  const handleChange = (e) => {
    const newTodo = e.target.value;
    setTodo(newTodo);
  };

  // this todo object is pass to  onClick
  const objTodo = {
    id: Math.floor(Math.random() * 1000),
    item: todo,
    //this key we're gonna need it to find the completed todo items
    completed: false,
  };

  //handle add btn click
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

//use connect method to connect this component with redux store
export default connect(mapStateToProps, mapDispatchToProps)(Todos);

import React, { useRef } from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { MdDoneOutline, MdOutlineDelete } from "react-icons/md";

const TodoCard = ({ todoItem, removeTodo, editTodo, completeTodo }) => {
  //useRef allows us to persist values between renders. for the edit function
  const inputRef = useRef(true);

  //make our textarea editable on click edit button
  const changeFocus = () => {
    inputRef.current.disabled = false;
    inputRef.current.focus();
  };

  // function to update the todo item
  const edit = (id, value, e) => {
    if (e.which === 13) {
      //equivalent to if(e.key === "Enter")
      //which 13 is a key code for Enter
      editTodo({ id, item: value });
      inputRef.current.disabled = true;
    }
  };

  return (
    <li key={todoItem.id} className="card">
      <textarea
        ref={inputRef}
        disabled={inputRef}
        defaultValue={todoItem.item}
        onKeyPress={(e) => edit(todoItem.id, inputRef.current.value, e)}
      />
      <div className="btns">
        <button style={{ color: "blue" }} onClick={() => changeFocus()}>
          <AiOutlineEdit />
        </button>
        {/* the complete button will be displayed only if it's not done yet */}
        {todoItem.completed === false && (
          <button
            style={{ color: "green" }}
            onClick={() => completeTodo(todoItem.id)}
          >
            <MdDoneOutline />
          </button>
        )}

        <button
          style={{ color: "red" }}
          onClick={() => removeTodo(todoItem.id)}
        >
          <MdOutlineDelete />
        </button>
      </div>
      {todoItem.completed && <span className="completed">done</span>}
    </li>
  );
};

export default TodoCard;

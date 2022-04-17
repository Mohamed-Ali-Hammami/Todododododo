import React from "react";
import Helmet from "react-helmet";
import DisplayTodos from "./components/DisplayTodos";
import Todos from "./components/Todos";

function App() {
  return (
    <div className="App" style={{ textAlign: "center" }}>
      {/* helmet for the tab browser */}
      <Helmet>
        <title>List To Do</title>
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon"></link>
        <link rel="stylesheet" href="style.css"></link>
      </Helmet>
      <h1
        initial={{ y: -200 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", duration: 0.5 }}
        whileHover={{ scale: 1.1 }}
      >
        Todo List
      </h1>
      <Todos />
      <DisplayTodos />
    </div>
  );
}

export default App;

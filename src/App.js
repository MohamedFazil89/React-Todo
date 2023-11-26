import React from "react";
import { useState } from "react";
import './App.css'



function Todo() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');




  const addtask = () => {
    if (input.trim() !== "") {
      setTodos([...todos, input]);
      setInput(''); // Reset the input after adding a task
      console.log('Input after reset:', input); // Add a console log to check the value of input
    } else {
      alert("Please enter a task");
    }
  }


  const Remove = (IndexOfList) => {
    const updatedTodo = todos.filter((_, index) => index !== IndexOfList);
    setTodos(updatedTodo);
  }

  return (
    <>
      <h1>Todo List</h1>
      <div className="container">
        <div className="flex">
          <input
            className="Input_box"
            type="text"
            placeholder="Enter your task"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button className="Add_button" onClick={addtask}>Add</button>
        </div>


        <div className="Task_box">
          <ul className="Task_List">
            {todos.map((todo, index) => (
              <li key={index}>{todo}
                <button className="Remove_button" onClick={() => Remove(index)}>Remove</button>
              </li>
            ))}


          </ul>
        </div>

      </div>
    </>
  )

}


export default Todo;
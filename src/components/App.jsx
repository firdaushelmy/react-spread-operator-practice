import React, { useState } from 'react';

function App() {
  const [todo, setTodo] = useState('');
  const [taskLists, setTaskLists] = useState([]);

  function handleChange(event) {
    const newValue = event.target.value;
    setTodo(newValue);
  }

  function handleClick() {
    setTaskLists(function (prevValue) {
      return [...prevValue, todo];
    });
  }

  return (
    <div className='container'>
      <div className='heading'>
        <h1>To-Do List</h1>
      </div>
      <div className='form'>
        <input type='text' value={todo} onChange={handleChange} />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {taskLists.map((taskList) => (
            <li>{taskList}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;

//CHALLENGE: Make this app work by applying what you've learnt.
//1. When new text is written into the input, its state should be saved.
//2. When the add button is pressed, the current data in the input should be
//added to an array.
//3. The <ul> should display all the array items as <li>s

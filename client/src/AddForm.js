
import React, {useState, useEffect} from 'react';
import { render } from 'react-dom';

function AddForm ({addTodo}){
  const [todo, setTodo] = useState({
    task: "",
  });
  const [counter, setCounter] = useState(1);
  const handleClick = e =>{
    setCounter(()=> counter +1 );
    addTodo({...todo, id:counter});
    setTodo({...todo, task:""});
  }
  const handleChange = (e) => {
    setTodo({...todo, task:e.target.value});
  };
  return(
    <div>
      <input id="taskName" type="text" value={todo.task} placeholder="Add task" label="Add task" onChange={handleChange}></input>
      <button onClick={handleClick}>Add</button>
      <div>Added: {counter - 1} tasks</div>
    </div>
  );
}
export default AddForm;
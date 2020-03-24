import React, {useState, useEffect} from 'react';
import AddForm from './AddForm';

function App() {
  const [todos, setTodos] = useState([]);
  const addTodo = (todo) =>{
    setTodos([todo, ...todos ]);
  };
  useEffect(()=>{
    console.log(todos);
  });

  return (
    <div className="App">
      <header className="App-header">
       <AddForm addTodo={addTodo}/>
       {
         todos.map((e)=>{
            return<p>{e.id} - {e.task}</p>;
         })
       }
      </header>
    </div>
  );
}

export default App;

import React, {useState} from 'react';
import ReactDOM from 'react-dom';
function App() {
  const [todos, setTodos] = React.useState([
  {
    text: 'have a break and play Uke',
    isCompleted: false,
  },
  {
    text: 'get back to learning again',
    isCompleted: false,
  },
  {
    text: 'meet friend for lunch',
    isCompleted: false,
  },
  {
    text: 'get back to learning again', // Corrected typo
    isCompleted: false,
  },
  {
    text: 'build todo app',
    isCompleted: false,
  },
  {
    text: 'show my new app to my kids',
    isCompleted: false,
  }
]);
  const addTodo = text => {
  const newTodos = [...todos,{text:text, isCompleted:false}];
  setTodos(newTodos);
}
const removeTodo = index => {
  const index = Number(e.target.id);
  let temp = [...todos];
  temp.splice(index,1);
  setTodos(temp);
}
return (<>
  <div className="app">
    <div className="todo-lists">
      {todos.map((todo, i) => 
        <Todo index={i} key={i} todo={todo} remove =
        {removeTodo}/>)}
      <TodoForm addTodo={addTodo} />
    </div>
  </div>
</>);
}
ReactDOM.render
(<App />, document.getElementById('root'));
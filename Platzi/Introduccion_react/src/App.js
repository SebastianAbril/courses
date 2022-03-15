import React from 'react';
import { TodoCounter } from './TodoCounter';
import {TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { CreateTodoButton } from './CreateTodoButton';
import { TodoItem } from './TodoItem';
import './App.css';

const todos = [
  { text: 'Cortar cebolla', completed: false},
  { text: 'Tomar el curso de intro a React', completed: false},
  { text: 'Sacar al perro', completed: false}
];



function App() {
  return (
    <React.Fragment>
      {<TodoCounter />}
    
      <TodoSearch />
      
      <TodoList>
        {todos.map( todo => (<TodoItem key={todo.text} text={todo.text}/>))}
      </TodoList>

      <CreateTodoButton />
      
    </React.Fragment>
  );
}

export default App;

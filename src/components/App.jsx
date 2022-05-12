import { useState } from 'react'
import Header from './Header';
import TodoList from './TodoList'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Card} from 'react-bootstrap'


export default function App() {
const [todos, setTodos] = useState(['walk the walk'])


  return (
    <main className='app'>

        <Header numberOfTodos={ todos.length }/>
        <TodoList todos={todos} setTodos={setTodos} />

    </main>
  )
};

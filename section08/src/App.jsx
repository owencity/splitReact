import './App.css'
import Header from './components/header'
import List from './components/List'
import Editor from './components/Editor'
import { useState, useRef } from 'react'


const mockData = [
  {
    id: 0,
    isDone: false,
    content : "React Study",
    date : new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content : "Game",
    date : new Date().getTime(),
  },
  {
    id: 3,
    isDone: false,
    content : "Sining",
    date : new Date().getTime(),
  },
];

function App() {
  
  const [todos, setTodos] = useState(mockData);
  const idRef = useRef(3);

  const  onCreate = (content) => {
    const newTodo = {
      id: idRef.current++,
      isDone: false,
      content : content,
      date : new Date().getTime(),
    }

    setTodos([newTodo , ...todos]);
  }
  return (
    <div className='App'>
     <Header/>
     <Editor onCreate={onCreate}/>
     <List/>
    </div>
  )
}

export default App

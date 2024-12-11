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
  // useRef로 초기값 설정 ,

  /* 
    왜 useRef를 사용했는가?
    1. 리랜더링을 피하기위해
    useState를 사용하면 값이 변경될때 마다 컴포넌트가 리렌더링됨
    하지만 useRef를 사용하면 current 값을 변경해도 컴포넌트는 리렌더링 되지않음
    단순히 고유 id를 생성하기위한것으로 UI와 직접적으로 연결되지않으면 리렌더링되지 않도록 권장
  */
  const  onCreate = (content) => {
    const newTodo = {
      id: idRef.current++, // current -> useRef가 반환하는 디폴트 객체 
      isDone: false,
      content : content,
      date : new Date().getTime(),
    }

    setTodos([newTodo , ...todos]);
  };

  const onUpdate = (targetId) => {
    // todos State의 값들 중에
    // targetId와 일치하는 Id를 갖는 투두 아이템의 isDone 변경

    // 인수: todos 배열에서 targetId와 일치하는 id를 갖는 요소의 데이터만 딱 바꾼 새로운 배열
    setTodos(
      todos.map((todo) => 
        todo.id === targetId 
        ? {...todo, isDone: !todo.isDone }
        : todo
      )
    ); 
  };

  const onDelete = (targetId) => {
    // 인수: todos 배열에서 targetId와 일치하는 id를 갖는 요소만 삭제한 새로운 배열
    setTodos(todos.filter((todo) => todo.id !== targetId));
  };

  return (
    <div className='App'>
     <Header/>
     <Editor onCreate={onCreate}/>
     <List todos={todos} onUpdate={onUpdate} onDelete={onDelete}/>
    </div>
  )
}

export default App

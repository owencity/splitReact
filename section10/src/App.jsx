import './App.css'
import Header from './components/header'
import List from './components/List'
import Editor from './components/Editor'
import { useState, useRef, useReducer } from 'react'

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

function reducer(state,action) {
  switch(action.type) {
    case 'CREATE' : 
    return [action.data, ...state];
    case 'UPDATE' :
    return state.map((item) => 
    item.id === action.targetId 
      ? {...item, isDone: !item.isDone}
      : item
    );
    case 'DELETE' :
      return state.filter(
        (item) => item.id !== action.targetId)
    default :
    return state;

    }
  }



// 컴포넌트는 UI를 표현하기 위함
// UI를 표현하는 코드보다 상태를 관리하는 코드가 내부에 많은것은 좋지않다.
function App() {
  
  const [todos, dispatch] = useReducer(reducer, mockData);
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
   dispatch({
    type: "CREATE",
    data : {
      id : idRef.current++,
      isDone:false,
      content: content,
      date: new Date().getTime(),
    }
   })
  };

  const onUpdate = (targetId) => {
   dispatch({
    type: "UPDATE",
    targetId: targetId,
   });
  };

  const onDelete = (targetId) => {
    // 인수: todos 배열에서 targetId와 일치하는 id를 갖는 요소만 삭제한 새로운 배열
    // setTodos(todos.filter((todo) => todo.id !== targetId));
    dispatch({
      type:"DELETE",
      targetId: targetId,
    })
  };

  /* 
    삭제하려는 id를 제외한 나머지 요소들만 새로운 배열로 반환 
    이를통해 삭제된 항목을 제외한 목록만 동작 구현 가능
  */

  return (
    <div className='App'>
     <Header/>
     <Editor onCreate={onCreate}/>
     <List todos={todos} onUpdate={onUpdate} onDelete={onDelete}/>
    </div>
    )
  }


export default App;

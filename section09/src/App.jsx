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

  /* 
    reduce 함수는 상태(state)관리하고 업데이트하느 로직을 모듈화 하고 일관되게 처리하기위해 사용
    상태를 어떻게 변경할지 정의하는 순수함수

    왜 reducer를 사용하는가?
    1. 상태관리의 일관성(모든 상태변화는 reducer를 통해서만 일어남으로써 예측 가능)
    2. 명확한 액션 기반 업데이트(액션 객체 기반 상태 업데이트, 액션객체는 type과 데이터(payload)를 가지고있음, 각 애션에 따라 상태변화 로직 구분)
    3. 불변성 유지(상태를 직접 수정하지않고 새로운 상태 반환, 이를통해 불변성을 유지, 리액트와 같은 라이브러리에서 성능 최적와가 용이)
    4. 테스트 가능성
    5. 규모가 커진 애플리케이션 유지 보수
  */



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

import './List.css'
import TodoItem from './TodoItem';
import { useState } from 'react';

const List = ({todos, onUpdate, onDelete}) => {
    const [search, setSearch] = useState("");

    const onChangeSearch = (e) => {
        setSearch(e.target.value);
    }
    /* 
        e.target.value
        이벤틑 객체에서 target 객체의 value(키) 속성 호출
        e.target 
        이벤트가 발생한 DOM 요소 참조
        예로 input 요소에서 이벤트 발생시 e.target은 해당 input 요소를 가리킴
        e.target.value
        value는 보통 input 이나 textarea 요소의 현재 입력값을 나타냄
    */

    const getFilteredDate = () => {
        if(search === "") {
            return todos;
        }
        return todos.filter((todo) => 
            todo.content
            .toLowerCase() // 필터링할 데이터 문자열 소문자 변환
            .includes(search.toLowerCase())); // 검색어도 소문자로 변환
    };

    /* 
        todos.filter((todo) 에서 todo는 어디선가 "지정"되거나 선언되지 않았지만,
        배열메서드의 동작 원리로 인해 자동 제공된다. (자바스크립트의 고차함수 특성)
        filter 메서드는 배열을 순회하면서 각 요소를 콜백함수에 전달, 조건을 만족하는 요소만 새로운 배열로 반환
        todo는 순회중인 배열이 각 요소를 의미, 즉 어디선가 "받아오는 값"이 아닌
        filter 메서드 내부에서 지정된 이름
        개발자가 임의로 지은 이름
        filter 메서드는 콜백 함수에 배열의 각 요소를 자동으로 전달
        이 전달받은 값을 어떻게 부를지는 개발자가 결정
        todos 배열의 모든 요소가 차례로 todo라는 이름의 파라미터로 전달된다.
        따라서 todo는 단순히 배열의 요소를 가리키기 위해 개발자가 선택한 이름
        단지 이름일뿐 실제로는 메모리 주소값을 가져와 해당 주소의 값을 하나씩 true인지 false인지 비교해서 배열에 저장
        그리고 마지막 차례가 끝나면 완성된 배열을 return
        파라미터 todo는 단순히 메모리 주솟값을 담는 "그릇"일뿐이다.
        */

    /* 
        filter 함수 -> 특정 조건을 만족하는 요소만 새로운 배열로 반환
        내부적으로 조건 검사, 각 요소에대해 true 또는 false값을 기준으로 동작 
    */

    const filteredTodos = getFilteredDate();
    

    return (
        <div className="List">
            <h4>Todo List ❤️</h4>
            <input 
            value={search}
            onChange={onChangeSearch} // 입력필드(input, textarea, select등) 값 변경시 실행되는 함수
            /* 
                왜 onChange 를 사용하는가?
                1. 실시간 데이터 반영
                - 사용자가 입력한 검색어가 변경될때마다 리액트 상태를 업데이트
                - 상태가 변경되면 컴포넌트가 리렌더링 되면서 UI가 즉시 업데이트
                2. 검색어와 데이터를 동기화
                - 검색어를 기준으로 데이터를 필터링하여 , 조건에 맞는 데이터를 실시간으로 화면에 렌더링

            */
            placeholder="검색어를 입력하세요" />
        <div className="todos_wrapper">
         {filteredTodos.map((todo) => {
            return <TodoItem 
            key={todo.id} 
            {...todo} 
            onUpdate={onUpdate}
            onDelete={onDelete}/> // props 받는 문법
         })}
        {/* 
            map은 배열의 각 요소 순회, 제공된 콜백함수의 반환값으로 새 배열 생성(원본배열 변경x)
            전체 또는 필터링된 TodoItem 의 props 를 받아 배열로 반환 
        */}
         
        </div>
        </div>
    );
  
};

export default List;
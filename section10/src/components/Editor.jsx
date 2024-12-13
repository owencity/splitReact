import './Editor.css'
import { useState, useRef, useContext } from 'react';
import { TodoContext } from '../App';
/* 
    useRef
    컴포넌트 내에 DOM 요소나 특정값에 대한 "참조"를 유지 할 수 있게 해줌

    주요 특징
    1. DOM 요소 접근 : 특정 DOM 요소에 직접 접근할 때 사용
    2. 값 유지 : 컴포넌트가 리렌더링 되어도 값이 유지됨.
    3. 리렌더링 없음: useRef로 저장된 값이 변경되어도 컴포넌트는 리랜더링 되지않음

    useState는 값이 변경되면 컴포넌트를 리렌더링 합니다.
    사용자 인터페이스(UI)가 변해야 할 때 사용합니다.

    DOM 조작 최소화 , 리액트는 일반적으로 DOM을 직접 조작하는것을 피하도록 설계
    useRef 사용할 때는 꼭 필요한 경우에만 사용
    리렌더링 필요시 useState 사용 
    useRef 값 변경은 컴포넌트에 영향을 주지않으므로 , UI가 업데이트되어야한다면 useState를 사용
    
    */

const Editor = () => {

    const {onCreate} = useContext(TodoContext);
    const [content, setContent] = useState("");
    const contentRef = useRef();

    const onChangeContent = (e) => {
        setContent(e.target.value);
    }

    const onKeydown = (e) => {
        if(e.keyCode === 13) {
            onSubmit();
        }
    }

    const onSubmit = () => {
        if ( content === "" ) {
            contentRef.current.focus();
            return;
        }
        onCreate(content)
        setContent("");
    }

    return <div className="Editor">
        <input 
        ref={contentRef}
        value={content}
        onKeyDown={onKeydown}
        onChange={onChangeContent}
        placeholder="새로운 todo..." />
        <button onClick={onSubmit}>추가</button>
    </div>
};

export default Editor;
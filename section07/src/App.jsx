import './App.css'
import Viewer from './components/Viewer'
import Controller from './components/Controller';
import { useState, useEffect, useRef } from 'react';
import Even from './components/Even';

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  const isMount = useRef(false);

  // 1. 마운트 : 탄생
  useEffect(() => {
    console.log("mount")
  }, []);

  // 2. 업데이트 : 변화, 리렌더링
  useEffect(() => {
    if(!isMount.current){
      isMount.current = true;
      return;
    }
    console.log("update")
  });
  // 3. 언마운트 : 죽음


  // useEffect(() => {
  //   console.log(`count: ${count} / input: ${input}` );
  // }, [count, input]);
  // 의존성 배열, dependency array , deps

  const onClickButton = (value) => {
    setCount(count + value); // setCount 비동기 동작
    // 호출만된것 완료는 x 
    // 리액트는 비동기업데이트, useEffect를 사용해서 변경된 state를 사용해야한다.
  };

  return (
  <div className='App'>
  <h1>Simple Count</h1>
  <section>
    <input value = {input} onChange={(e) => {
      setInput(e.target.value);
    }}></input>
  </section>
  <section>
    <Viewer count={count}/> 
    {count % 2 === 0? <Even/> : null}
  </section>
  <section>
  <Controller onClickButton = {onClickButton}/>
  </section>
  </div>
  );
  
}

export default App

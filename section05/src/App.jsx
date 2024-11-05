import './App.css';
import Bulb from './components/Bulb';
import Counter from './components/Counter';
// 리랜더링이 진행되는 상황 
// 1. state 변경
// 2. props 값을 받았을 때
// 3. 부모 컴포넌트가 리랜더링되면 자식도 리랜더링 진행된다.




function App() { // 부모 부모->자식 (계층) 
  // App -> 루트 컴포넌트 , 
 
 
  return (
    <>
      <Bulb/>
      <Counter/>
     </>
  )
}

// 화면을 다시그려 값을 반환-> 리랜더링

export default App

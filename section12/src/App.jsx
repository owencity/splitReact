import { useState } from 'react'
import { Routes, Route, Link, useNavigate } from 'react-router-dom'
import Diary from './pages/Diary'
import Home from './pages/Home'
import New from './pages/New'
import NotFound from './pages/NotFound'
import { getEmotionImage } from './util/get-emotion-image'
import Button from './components/Button'
import Header from './components/Header'
import Edit from './pages/Edit'

  // 1. "/" : 모든 일기를 조회하는 Home 페이지
  // 2. "/new" : 새로운 일기를 작성하는 New 페이지
  // 3. "/diary" : 일기를 상세히 조회하는 Diary 페이지

  /* 
   리액트에서 Link 와 useNavigate 차이
   Link : UI요소를 통해 사용자 클릭으로 페이지 이동
   - 정적인 이동 경로 설정에 적합
   - HTML <a> 태그와 비슷하나 리액트 Link는  CSR방식을 취함
   useNavigate : 코드에서 특정 이벤트나 조건으로 페이지 이동
   - 동적인 경로 변경과 조건부 이동에 적합(예: 로그인성공, 버튼클릭)
   - JavaScript 로직을 통한 이동

   이미지파일을 public 이아닌 assets에 저장하느 이유? 
  vite의 이미지 최적화 기능을 사용하기 위함.
  */
function App() {
  const [count, setCount] = useState(0)

  const nav = useNavigate();

  const onClickButton = () => {
     nav("/new")
  }

  return (
    <>
  {/* <Header title={"이것은 헤더"}
  leftChild={<Button text={"left"} />}
  rightChild={<Button text={"right"}/>}
  />

    <Button 
    text={"123"}
    type={"DEFAULT"}
    onClick={() => {
      console.log("클릭완료");
    }}
    />

<Button 
    text={"123"}
    type={"POSITIVE"}
    onClick={() => {
      console.log("클릭완료");
    }}
    />

<Button 
    text={"123"}
    type={"NEGATIVE"}
    onClick={() => {
      console.log("클릭완료");
    }}
    /> */}
    
   
    <Routes > 
    <Route path="/" element = {<Home/>} />
    <Route path="/new" element = {<New/>} />
    <Route path="/diary/:id" element = {<Diary/>} />
    <Route path="/edit/:id" element = {<Edit/>} />
    <Route path="*" element = {<NotFound/>} />
    </Routes>
    </>
  );
}

export default App

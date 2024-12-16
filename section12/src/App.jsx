import { useState, useRef, useReducer, createContext } from 'react'
import { Routes, Route, Link, useNavigate } from 'react-router-dom'
import Diary from './pages/Diary'
import Home from './pages/Home'
import New from './pages/New'
import NotFound from './pages/NotFound'
import { getEmotionImage } from './util/get-emotion-image'
import Button from './components/Button'
import Header from './components/Header'
import Edit from './pages/Edit'

const mockData = [
  { 
    id: 1,
    createdDate : new Date("2024-12-14").getTime(),
    emotionId : 1,
    content : "1번 일기 내용",
  },
  { 
    id: 2,
    createdDate : new Date("2024-12-15").getTime(),
    emotionId : 2,
    content : "2번 일기 내용",
  },
  { 
    id: 3,
    createdDate : new Date("2024-11-15").getTime(),
    emotionId : 3,
    content : "3번 일기 내용",
  },
]

function reducer(state, action) {
  switch(action.type) {
    case "CREATE" : 
    return [action.data ,...state]
    case "UPDATE" :
    return state.map((item) => 
     String(item.id) === String(action.data.id) 
      ? action.data 
      : item
    );
    case "DELETE" : 
    return state.filter((item) => String(item.id) !== String(action.id));
    default :
    return state;
  }
}

export const DiaryStateContext = createContext();
export const DiaryDispatchContext = createContext();


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
  const [data, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(3);
  // 새로운 일기 추가
  const onCreate = (createdDate, emotionId, content) => {
    // 새로운 일기를 추가하는 기능
    dispatch({
      type:"CREATE",
      data: {
        id : idRef.current++,
        createdDate,
        emotionId,
        content,
      },
    });
  };
  // 기존 일기 수정
  const  onUpdate = (id, createdDate, emotionId, content) => {
    dispatch(
      {
        type: "UPDATE",
        data : {
          id, createdDate, emotionId, content
        }
      }
    )
  }

  // 기존 일기 삭제
  const onDelete = (id) => {
    dispatch({
      type: "DELETE",
      id
    })
  }

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
    

    <DiaryStateContext.Provider value={data}>
      <DiaryDispatchContext.Provider 
      value={{
        onCreate,
        onUpdate,
        onDelete,
      }}
      >
        <Routes > 
        <Route path="/" element = {<Home/>} />
        <Route path="/new" element = {<New/>} />
        <Route path="/diary/:id" element = {<Diary/>} />
        <Route path="/edit/:id" element = {<Edit/>} />
        <Route path="*" element = {<NotFound/>} />
        </Routes>
      </DiaryDispatchContext.Provider>
    </DiaryStateContext.Provider>
    </>
  );
}

export default App

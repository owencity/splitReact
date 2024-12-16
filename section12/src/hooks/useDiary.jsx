import { useContext, useState, useEffect } from "react";
import { DiaryStateContext } from "../App";
import { useNavigate } from "react-router-dom";

const useDiary = (id) => {

  const data = useContext(DiaryStateContext);
  const [curDiaryItem, setCurDiaryItem] = useState();
  const nav = useNavigate();

  useEffect(() => {
    const currentDiaryItem = data.find(
      (item) => String(item.id) === String(id)
    );

    if (!currentDiaryItem) {
      window.alert("존재 않는 일기입니다.");
      nav("/", { replace: true });
    }
    setCurDiaryItem(currentDiaryItem);
  }, [id]);

  return curDiaryItem;
};

export default useDiary;

// 앞에 use를 붙이면 커스텀훅
/* 
    export 와 export default 차이 
    export 
    - 여러개 내보낼수 있음 
    - 정확한 이름 import
    - {} 로 import 
    - 여러 유틸리티 함수, 상수등을 내보낼 때
    export default 
    - 하나만 보낼수 있음
    - 원하는 이름으로 import 가능
    - {} 없이 import
    - 파일의 주요 기능을 내보낼 때 

    커스텀 훅의 이름을 반드시 use로 시작해야 리액트가 올바르게 동작함
*/
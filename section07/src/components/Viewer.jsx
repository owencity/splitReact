import { useState } from "react";

const Viewer = ({count}) => {

    
    return <div>
        <div>현재 카운트</div>
        <h1>{count}</h1>
        </div>
}

/* 
    컴포넌트간의 데이터교환 => props 
    props는 부모자식간에만 전달이 가능
*/


export default Viewer;
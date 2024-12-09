import { useState } from "react";

// 간단한 회원가입 폼
// 1. 이름 2. 생년월일 3. 국적 4. 자기소개 
// 이벤트 핸들링 
// Event : 웹 내부에서 발생하는 사용자의 행동(예: 버튼클릭, 메시지 입력, 스크롤 등등)
// Handling : 다루다, 처리하다 , 
// Event Handling : 이벤트가 발생했을 때 그것을 처리하는 것 (예: 버튼클릭시 경고창 노출)
// State를 갖는 React 컴포넌트는 State값에 따라 렌더링 되는 UI가 결정된다
// 리액트에서 state 값이 변경되면 변경감지를 하여 리렌더링이 진행됨
const Register = () => {

    const [input, setInput] = useState({
        name: "",
        birth: "",
        country: "",
        bio: ""
    });
    const onChange = (e) => {
        setInput({
            ...input,
            [e.target.name] : e.target.value,
        });
    }

    console.log(input);

    // const onChangeName = (e) => {
    //     setInput({
    //         ...input,
    //         name: e.target.value
    //     })
    // }

    // const onchangeBirth = (e) => {
    //     setInput({
    //         ...input,
    //         birth: e.target.value
    //     })
    // }

    // const onchangeCountry = (e) => {
    //     setInput({
    //         ...input,
    //         country: e.target.value
    //     })
    // }

    // const onchangeBio = (e) => {
    //     setInput({
    //         ...input,
    //         bio: e.target.value
    //     })
    // }

    return (

        <div>
            <div>
            <input name="name" 
            value={input.name} placeholder={"이름"} onChange={onChange} />
            </div>

            <div>
            <input name="birth"
             value={input.birth} type="date" onChange={onchange} />
            </div>

            <div>
                <select name="country" 
                value={input.country} onChange={onchange}>
                    <option value=""></option>
                    <option value="kr">한국</option>
                    <option value="cn">중국</option>
                    <option value="uk">영국</option>
                </select>
            </div>

            <div>
                <textarea  name="bio"
                value={input.bio} onChange={onchange}></textarea>
                {input.bio}
            </div>
        </div>
     )
}

export default Register;
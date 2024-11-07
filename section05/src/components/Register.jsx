import { useState } from "react";

// 간단한 회원가입 폼
// 1. 이름 2. 생년월일 3. 국적 4. 자기소개 

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
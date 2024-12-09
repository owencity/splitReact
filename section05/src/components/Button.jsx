const Button = ({text, color, children}) => {
    // 이벤트 객체
    // 합성 이벤트 -> 모든 웹브라우저의 이벤트 객체를 하나로 통일한 형태
    // 브라우저마다 이벤트 객체가 다름 그래서 해결하기 위해 합성이벤트로 포맷해서 사용 
    
    const onClickButton = (e) => {
        console.log(e);
        console.log(text);
    }
    
    return (
    <button 
    onClick={onClickButton} // 콜백함수 전달하듯이 이름만
    // onMouseEnter={onClickButton}
    style={{color : color}}>
        {text} - {color.toUpperCase()}
        {children} 
        </button>
    );
};

Button.defaultProps = {
    color: "black",
};

export default Button;

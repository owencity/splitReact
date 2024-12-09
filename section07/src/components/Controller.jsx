const Controller = ({onClickButton}) => {
    return <div>
            <button
            onClick={() => {
                onClickButton(-1);
            }}>-1</button>
            <button
            onClick={() => {
                onClickButton(-10);
            }}>-10
            </button>
            <button
            onClick={() => {
                onClickButton(-100);
            }}>-100
            </button>
            <button
            onClick={() => {
                onClickButton(100);
            }}>+100
            </button>
            <button
            onClick={() => {
                onClickButton(10);
            }}>+10
            </button>
            <button
            onClick={() => {
                onClickButton(1);
            }}>+1
            </button>
        </div>
}

/*  
    유의할 점
    onClick에는 함수 레퍼런스를 전달해야한다.
    onClick = {onClickButton(-1)} 처럼 작성시, 즉시 실행되어 반환값이 onClick 속성으로 전달된다.
    즉 , 버튼을 렌더링 할때 onClickButton(-1)을 실행하고, 반환값(대개 undefined)를 이벤트 핸들러로 설정
    클릭시 아무 일도 일어나지 않는다.
    그래서 콜백 함수 형태로 감싸야한다. 클릭할 때만 함수가 실행되어야한다.

    리액트 이벤트 핸들러는 함수 레퍼런스를 전달 받아야한다 . 즉, 이벤트가 발생할 떄만 그 함수를 실행하도록 보장해야한다.
    예외 : 인자가 필요없을 떄 , 함수에 인자가 필요없다면 바로 함수 레퍼런스 전달가능하다.
*/

export default Controller;
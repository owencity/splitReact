import './TodoItem.css'
import { memo } from 'react';
import { useContext } from 'react';
import { TodoContext } from '../App';

const TodoItem = ({
    id, 
    isDone, 
    content, 
    date, 
    }) => {
    const {onUpdate, onDelete} = useContext(TodoContext);
    const onChangeCheckBox = () => {
        onUpdate(id);
    }

    const onDeleteTodo = () => {
        onDelete(id);
    }


    return (
    <div className="TodoItem">
        <input 
        onChange={onChangeCheckBox}
        readOnly 
        checked={isDone} 
        type="checkbox" />
        <div className="content">{content}</div>
        <div className="date">{new Date(date).toLocaleDateString()}</div>
        <button onClick={onDeleteTodo}>삭제</button>
    </div>
    );
};


// 고차 컴포넌트 (HOC)
// export default memo(TodoItem, (prevProps, nextProps) => {
//     // 반환값에 따라, Props가 바뀌었는지 안바뀌었는지 판단
//     // T -> Props 바뀌지 않음, 
//     // F -> Props 바뀜 -> 리렌더링 하라

//     if(prevProps.id !== nextProps.id) return false;
//     if(prevProps.isDone !== nextProps.isDone) return false;
//     if(prevProps.content !== nextProps.content) return false;
//     if(prevProps.date !== nextProps.date) return false;
//     if()

//     return true;
// });

export default memo(TodoItem);

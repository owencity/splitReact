import { useParams } from "react-router-dom";

const Edit = () => {
    const params = useParams();
    return <div>{params.id}는 번호</div>
}

export default Edit;
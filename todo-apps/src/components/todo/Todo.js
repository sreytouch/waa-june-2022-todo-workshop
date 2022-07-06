import React from "react";
import { useNavigate } from "react-router";

export default function Todo(props) {
    const navigate = useNavigate();
    const onClicked = (id) => {
        navigate('/todos/'+id)
    }
    return (
        <div onClick={() => onClicked(props.id)}>
            <h2>{props.title}</h2>
            {/* <h2>{props.id}</h2> */}
        </div>
    )
}
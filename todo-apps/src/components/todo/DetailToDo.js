import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

export default function DetailToDo(props){

    const params = useParams();
    const [todosState, setTodosState] = useState({});

    const fetchTodo = async() => {
        const result = await axios.get('http://localhost:8080/todos/'+params.id)
        setTodosState(result.data);
    }

    useEffect(()=>{
        fetchTodo()
    }, [params.id])

    return(
        <div>
            <h4>{todosState.title}</h4>
            <h4>{todosState.descriptions}</h4>
        </div>
    )
}


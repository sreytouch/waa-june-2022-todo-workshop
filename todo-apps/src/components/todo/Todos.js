import React, { useEffect, useState } from "react";
import axios from "axios";
import Todo from "./Todo";

export default function Todos(props) {
    const [todosState, setTodosState] = useState([]);
    const config = {
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET"
        }
    };
    const fetchTodos = async () => {
        const result = await axios.get('http://localhost:8080/todos', config);
        setTodosState(result.data);
    }

    useEffect(() => {
        fetchTodos();
    }, []);

    return (
        <div>
            {/* hello todo  */}
            {todosState.map((item) => {
                return <Todo title={item.title} key={item.id} id={item.id}></Todo>
            })}
        </div>
    )
}
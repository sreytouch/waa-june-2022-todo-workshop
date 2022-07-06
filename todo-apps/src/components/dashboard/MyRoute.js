import React from "react";
import { Routes, Route } from "react-router-dom";
import Todos from '../todo/Todos';
import Users from '../user/Users';
import DetailToDo from "../todo/DetailToDo";

export default function MyRoute(props) {
    return (
        <div>
            <Routes>
                <Route path='/todos' element={<Todos></Todos>}/>
                <Route path='/users' element={<Users></Users>}/>
                <Route path='/todos/{props.id}' element={<DetailToDo ></DetailToDo>}/>
            </Routes>
        </div>
    )
}
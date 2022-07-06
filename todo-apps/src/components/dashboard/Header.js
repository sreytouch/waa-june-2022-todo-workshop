import React from "react";
import { Link } from "react-router-dom";

export default function Headers(props) {
    return (
        <div>
            <ul>
                <li>
                    <Link to='/todos'>Todos</Link>
                </li>
                <li>
                    <Link to='/users'>Users</Link>
                </li>
            </ul>
        </div>
    )
}

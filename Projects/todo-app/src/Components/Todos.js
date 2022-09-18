import React from "react";
import TodoItem from "./TodoItem";

export default function Todos(props) {
    return (
        <>
            <div className="container my-4">
                {props.todos.map((todo) => {
                    return (
                        <TodoItem
                            todo = {todo}
                            del={props.del}
                        />
                    );
                })}
            </div>
        </>
    );
}

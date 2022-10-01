import React from "react";
import TodoItem from "./TodoItem";

export default function Todos(props) {
    
    return (
        <>
        
        <hr />
            <div className="container my-4">
            <h1 className="text-center class1">Your Todos List</h1>
            {props.todos.length!==0?
            <>
            <h3 className="text-center my-5 text"><strong className="bold">{props.len} </strong><span className="sentence">{props.len>1?"todos":"todo"} remaining</span></h3>
            </>
            :""}
            
                {props.todos.length===0?<h5 className="text-center text-danger my-5">No Todos to Display</h5>: props.todos.map((todo) => {
                    return (
                        <TodoItem todo = {todo} del={props.del} done={props.done} edit={props.edit} bg={props.bg}/>
                )
                })}
                
            </div>
        </>
    )
}
// ✓

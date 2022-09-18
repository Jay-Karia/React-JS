import React from "react";
import TodoItem from "./TodoItem";

export default function Todos(props) {

    const handleAdd = ()=>{

        let stTodos = JSON.parse(localStorage.getItem('todos'))
        if (stTodos===null) {stTodos = []}
        stTodos.push([
            {
                title: document.getElementsByClassName('title')[0].value,
                description: document.getElementsByClassName('desc')[0].value
            }
        ])
        localStorage.setItem('todos', JSON.stringify(stTodos))

        document.getElementsByClassName('btn')[0].innerHTML = "✓"
        document.getElementsByClassName('btn')[0].style.backgroundColor = "#14A44D"
        document.getElementsByClassName('title')[0].value = ""
        document.getElementsByClassName('desc')[0].value = ""
        

        setTimeout(() => {
            document.getElementsByClassName('btn')[0].innerHTML = "+"
            document.getElementsByClassName('btn')[0].style.backgroundColor = "#332D2D"
        }, 2000);
    }
    return (
        <>
        <div className="container my-5">
        <h1 className="text-center my-5" >Add a Todo</h1>
            <div className=" d-flex">
            <div className="input-group mb-3 mx-2 "style={{width:"30%"}}>
                <input maxLength={20} type="text" className="form-control title"  aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder="Todo Title"/>
            </div>
            <div className="input-group mb-3 "style={{width:"50%"}}>
                <textarea type="text" maxLength={74} className="form-control desc" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder="Todo Description"/>
            </div>
            <div className="btn btn-dark mx-3" style={{height: "10%", border:"none"}} onClick={handleAdd}>+</div>
            </div>
        </div>
        <hr />
            <div className="container my-4">
            <h1 className="text-center">Your Todos List</h1>
            {props.todos.length!==0?<h3 className="text-center my-5"><strong className="text-success">{props.todos.length}</strong> {props.todos.length>1?"todos":"todo"} remaining</h3>:""}
            
                {props.todos.length===0?<h5 className="text-center text-danger my-5">No Todos to Display</h5>: props.todos.map((todo) => {
                    return (
                        <TodoItem todo = {todo}del={props.del}/>
                )
                })}
                
            </div>
        </>
    )
}
// ✓

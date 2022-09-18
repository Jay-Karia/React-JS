import React from "react";

export default function TodoItem(props) {
    return (
        <>
            <div className="container my-5">
                <div className="item">
                    <strong>{props.todo.title}</strong> {props.todo.description}
                    <div style={{float:'right'}} onClick={()=>{props.del(props.todo.no)}}>
                        <img src={require('./del.png')} alt="delete" />
                    </div>
                </div>
            </div>
        </>
    )
}

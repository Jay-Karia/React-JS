import React from "react";

export default function TodoItem(props) {
    return (
        <>
            <div className="container my-5">
                <div className='item'>
                    {props.todo.map((e, i)=>{
                        return  <>
                        <strong>{props.todo[i].title}</strong> {props.todo[i].description}
                    <div style={{float:'right'}} onClick={()=>{props.del(props.todo.no)}}>
                        <img onClick={()=>{props.edit(props.todos[i].key)}} src={require('./edit.jpg')} alt="edit" style={{marginRight:'20px'}} />
                        <img src={require('./done.jpg')} alt="done" style={{marginRight:'20px'}} />
                        <img src={require('./del.png')} alt="delete" />
                    </div>
                        </>
                    })}
                </div>
            </div>
        </>
    )
}

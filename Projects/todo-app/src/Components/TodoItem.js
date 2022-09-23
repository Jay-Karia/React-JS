import React from "react";

export default function TodoItem(props) {
    
    return (
        <>
            <div className="container my-5">
                
                    {props.todo.map((e, i)=>{
                        return  <div className='item' style={{backgroundColor: props.todo[i].completed===true?'hsl(150, 60%, 60%)':'white'}} >
                        <strong>{props.todo[i].title}</strong> {props.todo[i].description}
                            <div style={{float:'right'}}>
                                <img onClick={()=>{props.edit(props.todos[i].key)}} src={require('./edit.jpg')} alt="edit" style={{marginRight:'20px'}} />
                                <img onClick={()=>{props.done(props.todo[i].key)}} src={require('./done.jpg')} alt="done" style={{marginRight:'20px'}} />
                                <img onClick={()=>{props.del(props.todo[i].key)}} src={require('./del.png')} alt="delete" />
                            </div>
                        </div>
                    })}
            </div>
        </>
    )
}

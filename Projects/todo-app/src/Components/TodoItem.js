import React from "react";

export default function TodoItem(props) {
    return (
        <>
            <div className="container my-5">
                
                    {props.todo.map((e, i)=>{
                        return <>
                        <div className="item card text-center">
                            <div className="card-header" style={{backgroundColor: props.todo[i].completed===true?'hsl(150, 60%, 85%)':'white'}}>
                                <strong className="todoTitle">{props.todo[i].title}</strong>
                            </div>
                            <div className="card-body todoDesc">
                                <p className="card-text">{props.todo[i].description}</p>
                            </div>
                            <hr />
                            <div className="my-2 d2" style={{color: Math.round((new Date(props.todo[i].due).getTime()-new Date().getTime())/(1000*60*60*24))>5 || props.todo[i].completed===true?"green":"#CC0000"}}>
                            <strong className="dueDate">
                            {/* {props.todo[i].completed===false?Math.round((new Date(props.todo[i].due).getTime()-new Date().getTime())/(1000*60*60*24))===0?"• Due today":"• Due "+Math.round((new Date(props.todo[i].due).getTime()-new Date().getTime())/(1000*60*60*24))+'d':"Done"} */}
                            { isNaN(Math.round((new Date(props.todo[i].due).getTime()-new Date().getTime())/(1000*60*60*24)))===true||Math.round((new Date(props.todo[i].due).getTime()-new Date().getTime())/(1000*60*60*24))<0 ?"• No due date": props.todo[i].completed===false?Math.round((new Date(props.todo[i].due).getTime()-new Date().getTime())/(1000*60*60*24))===0?"• Due today":"• Due "+Math.round((new Date(props.todo[i].due).getTime()-new Date().getTime())/(1000*60*60*24))+'d':"Done"}
                            </strong>
                            
                            </div>
                        <div className="my-2 card-footer"  style={{float:'right'}}>
                            <img onClick={()=>{props.edit(props.todo[i].key)}} src={require('../edit.jpg')} alt="edit" style={{marginRight:'20px'}} />
                            <img onClick={()=>{props.done(props.todo[i].key)}} src={require('../done.jpg')} alt="done" style={{marginRight:'20px'}} />
                            <img onClick={()=>{props.del(props.todo[i].key)}} src={require('../del.png')} alt="delete" />
                        </div>
                        </div>
                        </>
                        {/* </div> */}
                    })}
            </div>
        </>
    )
}

// Math.round((new Date(props.todo[i].due).getTime()-new Date().getTime())/(1000*60*60*24))
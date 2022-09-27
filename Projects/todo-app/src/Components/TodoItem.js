import React from "react";

export default function TodoItem(props) {
    return (
        <>
            <div className="container my-5">
                
                    {props.todo.map((e, i)=>{
                        /*  <div className="d-flex" style={{width:'120%'}}>*/
                        return <>
                        {/* <div className='item' style={{backgroundColor: props.todo[i].completed===true?'hsl(150, 60%, 85%)':'white'}} >
                        <strong className="todoTitle">{props.todo[i].title}</strong> <span className="todoDesc">{props.todo[i].description}</span>
                            <div style={{float:'right'}}>
                                <img onClick={()=>{props.edit(props.todo[i].key)}} src={require('../edit.jpg')} alt="edit" style={{marginRight:'20px'}} />
                                <img onClick={()=>{props.done(props.todo[i].key)}} src={require('../done.jpg')} alt="done" style={{marginRight:'20px'}} />
                                <img onClick={()=>{props.del(props.todo[i].key)}} src={require('../del.png')} alt="delete" />
                            </div>
                        </div>
                        <div className="text-center my-2" style={{fontWeight:'bolder', fontSize:'1.2rem', color:props.todo[i].due.split('-')[2]-String(new Date().getDate()).padStart(2, '0')>10?'#5cb85c':'orangered'}}>
                            • {props.todo[i].due.split('-')[2]-String(new Date().getDate()).padStart(2, '0')==="NaN"?"Due "+props.todo[i].due.split('-')[2]-String(new Date().getDate()).padStart(2, '0')+'d':"No Due Date"}
                        </div> */}
                        <div className="item card text-center">
                            <div className="card-header" style={{backgroundColor: props.todo[i].completed===true?'hsl(150, 60%, 85%)':'white'}}>
                                <strong className="todoTitle">{props.todo[i].title}</strong>
                            </div>
                            <div className="card-body todoDesc">
                                <p className="card-text">{props.todo[i].description}</p>
                            </div>
                            <hr />
                            <div className="my-2" style={{color: Math.round((new Date(props.todo[i].due).getTime()-new Date().getTime())/(1000*60*60*24))>5?"green":"orangered"}}>
                            <strong className="dueDate">
                            {props.todo[i].completed===false?Math.round((new Date(props.todo[i].due).getTime()-new Date().getTime())/(1000*60*60*24))<=0?"• Due today":"• Due "+Math.round((new Date(props.todo[i].due).getTime()-new Date().getTime())/(1000*60*60*24)+1)+'d':"Done"}

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

import React from "react";

import MediaQuery from 'react-responsive'

export default function AddTodo(props) {
    
    let filters = JSON.parse(localStorage.getItem("filter"));
    if (filters === null) {
        filters = [];
    }

    return (
        <>
            <h1 className="text-center my-5">Add a Todo</h1>
            <div className="container my-5 text-center justify-content-between addTodoContainer">
                <div className="addContainer">
                    <div className="input-group mb-3" style={{ width: "50%" }}>
                        <input
                            maxLength={50}
                            type="text"
                            className="form-control title"
                            aria-label="Sizing example input"
                            aria-describedby="inputGroup-sizing-default"
                            placeholder="Todo Title"
                            onChange={props.handleOnChange}
                        />
                        <div
                            className="btn wd1"
                            style={{
                                cursor: "default",
                                border: "1px solid grey",
                            }}
                        >
                            {50 - props.title.length}
                        </div>
                    </div>

                    <div className="input-group mb-3 " style={{ width: "80%" }}>
                        <textarea
                            type="text"
                            maxLength={80}
                            className="form-control desc"
                            aria-label="Sizing example input"
                            aria-describedby="inputGroup-sizing-default"
                            placeholder="Todo Description"
                            onChange={props.handleOnChange1}
                        />
                        <div
                            className="btn wd"
                            style={{
                                cursor: "default",
                                border: "1px solid grey",
                            }}
                        >
                            {80 - props.desc.length}
                        </div>
                    </div>
                    <div className="input-group mb-3 " style={{ width: "20%" }}>
                        <div
                            className="btn wd"
                            style={{
                                cursor: "default",
                                border: "1px solid grey",
                            }}
                        >
                            <label htmlFor="due">Due</label>
                        </div>
                        <input
                            type="date"
                            className="form-control due"
                            aria-label="Sizing example input"
                            aria-describedby="inputGroup-sizing-default"
                        />
                    </div>
                    <div className="input-group mb-3 " style={{ width: "70%" }}>
                        <div
                            className="btn wd"
                            style={{
                                cursor: "default",
                                border: "1px solid grey",
                            }}
                        >
                            <label htmlFor="due">Category</label>
                        </div>
                    <div>
                    <select name="category" id="category" className="form-control mx-2" aria-label="Default select example">
                            <option value="1" style={{backgroundColor: '#ffc107', fontSize:'1.2rem', fontFamily:'Arial'}}>Work</option>
                            <option value="2" style={{backgroundColor: '#0d6efd', color:'white' , fontSize:'1.2rem', fontFamily:'Arial'}}>Travel</option>
                            <option value="3" style={{backgroundColor: '#fd7e14', color:'white', fontSize:'1.2rem', fontFamily:'Arial'}}>Food</option>
                            <option value="4" style={{backgroundColor: '#dc3545', color:'white', fontSize:'1.2rem', fontFamily:'Arial'}}>Urgent</option>
                            <option value="5" style={{backgroundColor: '#198754', color:'white', fontSize:'1.2rem', fontFamily:'Arial'}}>Entertainment</option>
                            <option value="6" style={{backgroundColor: '#000000', color:'white', fontSize:'1.2rem', fontFamily:'Arial'}}>Custom</option>
                            {filters.map((e, i)=>{
                                return <option value="6" style={{backgroundColor: e.color, fontSize:'1.2rem', fontFamily:'Arial'}}>{e.category}</option>
                            })}
                        </select>
                    </div>
                        <MediaQuery minWidth={930}>
                        <input
                            maxLength={30}
                            type="text"
                            className="form-control cat customCat"
                            aria-label="Sizing example input"
                            aria-describedby="inputGroup-sizing-default"
                            placeholder="Custom Category"
                            style={{width:'50%', marginLeft:'20px'}}
                        />
                        {/* <label for="exampleColorInput" class="form-label">Choose Color</label> */}
                        <input type="color" className="form-control form-control-color" id="exampleColorInput" style={{width:'1%'}}></input>
                        <input
                            maxLength={2}
                            type="text"
                            className="form-control char"
                            aria-label="Sizing example input"
                            aria-describedby="inputGroup-sizing-default"
                            placeholder="Character"
                            style={{width:'10%', marginLeft:'20px'}}
                        />
                        </MediaQuery>
                        <MediaQuery maxWidth={930}>
                            <div className="container d-flex justify-content-between my-2" style={{width:'100%', padding:'0'}} >
                            <input
                            maxLength={30}
                            type="text"
                            className="form-control cat customCat mr-2"
                            aria-label="Sizing example input"
                            aria-describedby="inputGroup-sizing-default"
                            placeholder="Custom Category"
                            style={{width:'100%'}}
                        />
                        {/* <label for="exampleColorInput" class="form-label">Choose Color</label> */}
                        <input type="color" className="form-control form-control-color mx-2" id="exampleColorInput" style={{width:'20%'}}></input>
                        <input
                            maxLength={2}
                            type="text"
                            className="form-control char mx-2"
                            aria-label="Sizing example input"
                            aria-describedby="inputGroup-sizing-default"
                            placeholder="Character"
                            // style={{width:'auto', marginLeft:'20px'}}
                        />
                            </div>
                        </MediaQuery>
                    </div>
                    <button
                        className="btn addBTN btn-dark"
                        
                        style={{ height: "10%", border: "none" }}
                        onClick={props.handleAdd}
                        type="submit"
                    >
                        +
                    </button>
                </div>
            </div>
        </>
    );
}
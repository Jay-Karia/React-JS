import React from 'react'

export default function AddTodo(props) {
  return (
    <>
    <div className="container my-5">
                <h1 className="text-center my-5">Add a Todo</h1>
                <div className=" d-flex">
                    <div
                        className="input-group mb-3 mx-2 "
                        style={{ width: "30%" }}
                    >
                        <input
                            maxLength={20}
                            type="text"
                            className="form-control title"
                            aria-label="Sizing example input"
                            aria-describedby="inputGroup-sizing-default"
                            placeholder="Todo Title"
                            onChange={props.handleOnChange}
                        />
                        <div className="btn wd1" style={{cursor:'default', border:'1px solid grey'}}>{20-props.title.length}</div>
                    </div>
                    <div className="input-group mb-3 " style={{ width: "50%" }}>
                        <textarea
                            type="text"
                            maxLength={75}
                            className="form-control desc"
                            aria-label="Sizing example input"
                            aria-describedby="inputGroup-sizing-default"
                            placeholder="Todo Description"
                            onChange={props.handleOnChange1}
                        />
                        <div className="btn wd" style={{cursor:'default', border:'1px solid grey'}}>{75-props.desc.length}</div>
                    </div>
                    <div
                        className="btn addBTN btn-dark mx-3"
                        style={{ height: "10%", border: "none" }}
                        onClick={props.handleAdd}
                    >
                        +
                    </div>
                </div>
            </div>
    </>
  )
}

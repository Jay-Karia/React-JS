<<<<<<< HEAD
import React from "react";

export default function AddTodo(props) {
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
                    <div className="input-group mb-3 " style={{ width: "35%" }}>
                        <div
                            className="btn wd"
                            style={{
                                cursor: "default",
                                border: "1px solid grey",
                            }}
                        >
                            <label htmlFor="due">Category</label>
                        </div>
                        <input
                            maxLength={30}
                            type="text"
                            className="form-control cat"
                            aria-label="Sizing example input"
                            aria-describedby="inputGroup-sizing-default"
                        />
                    </div>
                    <div
                        className="btn addBTN btn-dark"
                        style={{ height: "10%", border: "none" }}
                        onClick={props.handleAdd}
                    >
                        +
                    </div>
                </div>
                {/* <div
                    className="text-center btn wd my-2 collapse_btn "
                    onClick={props.toggleCollapse}
                    style={{width: "3%",margin: "0px"}}>
                    <strong className="text-center">⬆</strong>
                </div> */}
            </div>
        </>
    );
}
=======
import React from "react";

export default function AddTodo(props) {
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
                    <div className="input-group mb-3 " style={{ width: "35%" }}>
                        <div
                            className="btn wd"
                            style={{
                                cursor: "default",
                                border: "1px solid grey",
                            }}
                        >
                            <label htmlFor="due">Category</label>
                        </div>
                        <input
                            maxLength={30}
                            type="text"
                            className="form-control cat"
                            aria-label="Sizing example input"
                            aria-describedby="inputGroup-sizing-default"
                        />
                    </div>
                    <div
                        className="btn addBTN btn-dark"
                        style={{ height: "10%", border: "none" }}
                        onClick={props.handleAdd}
                    >
                        +
                    </div>
                </div>
                {/* <div
                    className="text-center btn wd my-2 collapse_btn "
                    onClick={props.toggleCollapse}
                    style={{width: "3%",margin: "0px"}}>
                    <strong className="text-center">⬆</strong>
                </div> */}
            </div>
        </>
    );
}
>>>>>>> d0abb49c1e058b7fda2021674c9ade1587bb8e63

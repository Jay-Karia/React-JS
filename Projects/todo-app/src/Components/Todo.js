import React from "react";

export default function Todo() {
    const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
    return (
        <>
            <div className="newTodo container">
                <div className=" text-center">
                    <input
                        className="form-control form-control-md"
                        type="text"
                        placeholder="Enter your todo title"
                        aria-label=".form-control-sm example"
                    />
                </div>
                <div className="mb-3 ">
                    <label
                        htmlFor="exampleFormControlTextarea1"
                        className="form-label"
                    ></label>
                    <textarea
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        rows="3"
                        placeholder="Enter your todo description"
                    ></textarea>
                </div>
                <div className=" text-center">
                    <input
                        className="form-control form-control-sm"
                        type="text"
                        placeholder="By: "
                        aria-label=".form-control-sm example"
                    />
                </div>
                <div className=" my-3">
                    <div
                        className="form-control form-control-sm"
                        type="text"
                        aria-label="readonly input example"
                        readonly
                    >Date: {date}</div>
                </div>
                <div className="btn btn-dark">Save</div>
            </div>
        </>
    );
}

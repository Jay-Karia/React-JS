import "./App.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Todos from "./Components/Todos";
import { useState } from "react";

function App() {
    const handleAdd = () => {
        let stTodos = JSON.parse(localStorage.getItem("todos"));
        if (stTodos === null) {
            stTodos = [];
        }
        stTodos.push([
            {
                title: document.getElementsByClassName("title")[0].value,
                description: document.getElementsByClassName("desc")[0].value,
            },
        ]);
        localStorage.setItem("todos", JSON.stringify(stTodos));
        setTodos(stTodos)

        document.getElementsByClassName("btn")[0].innerHTML = "✓";
        document.getElementsByClassName("btn")[0].style.backgroundColor =
            "#14A44D";
        document.getElementsByClassName("title")[0].value = "";
        document.getElementsByClassName("desc")[0].value = "";

        setTimeout(() => {
            document.getElementsByClassName("btn")[0].innerHTML = "+";
            document.getElementsByClassName("btn")[0].style.backgroundColor =
                "#332D2D";
        }, 2000);
    };

    let storageTodos = localStorage.getItem("todo");
    if (storageTodos === null) {
        storageTodos = [];
    }
    let [todos, setTodos] = useState(storageTodos);

    const del = (sr_no) => {
        let deleted = todos.splice(sr_no - 1, 1);
        setTodos(todos);
        console.log(storageTodos);
    };
    return (
        <>
            <Navbar />
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
                        />
                    </div>
                    <div className="input-group mb-3 " style={{ width: "50%" }}>
                        <textarea
                            type="text"
                            maxLength={74}
                            className="form-control desc"
                            aria-label="Sizing example input"
                            aria-describedby="inputGroup-sizing-default"
                            placeholder="Todo Description"
                        />
                    </div>
                    <div
                        className="btn btn-dark mx-3"
                        style={{ height: "10%", border: "none" }}
                        onClick={handleAdd}
                    >
                        +
                    </div>
                </div>
            </div>
            <Todos del={del} todos={todos} />
            <Footer />
        </>
    );
}

export default App;

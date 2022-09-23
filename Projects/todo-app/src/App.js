import "./App.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Todos from "./Components/Todos";
import { useState } from "react";

function App() {

    let storageTodos = JSON.parse(localStorage.getItem("todo"));
    if (storageTodos === null) {
        storageTodos = [];
    }
    
    let [todos, setTodos] = useState(storageTodos);

    const handleAdd = () => {
        let stTodos = JSON.parse(localStorage.getItem("todos"));
        if (stTodos === null) {
            stTodos = [];
        }
        stTodos.push([
            {
                key: stTodos.length,
                title: document.getElementsByClassName("title")[0].value,
                description: document.getElementsByClassName("desc")[0].value,
                completed: false
            },
        ]);
        localStorage.setItem("todos", JSON.stringify(stTodos));
        setTodos(stTodos)

        document.getElementsByClassName("addBTN")[0].innerHTML = "✓";
        document.getElementsByClassName("addBTN")[0].style.backgroundColor =
            "#14A44D";
        document.getElementsByClassName("title")[0].value = "";
        document.getElementsByClassName("desc")[0].value = "";

        setTimeout(() => {
            document.getElementsByClassName("addBTN")[0].innerHTML = "+";
            document.getElementsByClassName("addBTN")[0].style.backgroundColor =
                "#332D2D";
                document.getElementsByClassName("wd1")[0].innerHTML = 20
                document.getElementsByClassName("wd")[0].innerHTML = 75
        }, 1000);
    };

    const handleDone = (id)=>{
        let stTodos = JSON.parse(localStorage.getItem("todos"));
        if (stTodos === null) {
            stTodos = [];
        }
        if (stTodos[id][0].completed===true) {
            stTodos[id][0].completed = false
        } else if (stTodos[id][0].completed===false) {
            stTodos[id][0].completed = true
        }
        localStorage.setItem("todos", JSON.stringify(stTodos));
        setTodos(stTodos)
    }

    const handleDelete = (id)=>{
        let stTodos = JSON.parse(localStorage.getItem("todos"));
        if (stTodos === null) {
            stTodos = [];
        }
        stTodos.splice(id, 1)
        localStorage.setItem("todos", JSON.stringify(stTodos));
        setTodos(stTodos)
    }

    const [title, setTitle]=  useState("")
    const [desc, setDesc]=  useState("")

    const handleOnChange = (event)=>{
        setTitle(event.target.value)
    }

    const handleOnChange1 = (event)=>{
        setDesc(event.target.value)
    }

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
                            onChange={handleOnChange}
                        />
                        <div className="btn wd1" style={{cursor:'default', border:'1px solid grey'}}>{20-title.length}</div>
                    </div>
                    <div className="input-group mb-3 " style={{ width: "50%" }}>
                        <textarea
                            type="text"
                            maxLength={75}
                            className="form-control desc"
                            aria-label="Sizing example input"
                            aria-describedby="inputGroup-sizing-default"
                            placeholder="Todo Description"
                            onChange={handleOnChange1}
                        />
                        <div className="btn wd" style={{cursor:'default', border:'1px solid grey'}}>{75-desc.length}</div>
                    </div>
                    <div
                        className="btn addBTN btn-dark mx-3"
                        style={{ height: "10%", border: "none" }}
                        onClick={handleAdd}
                    >
                        +
                    </div>
                </div>
            </div>
            <Todos del={handleDelete} todos={todos} done={handleDone}/>
            <Footer />
        </>
    );
}

export default App;

import "./App.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Todos from "./Components/Todos";
import { useState } from "react";
import Filters from "./Components/Filters";
import AddTodo from "./Components/AddTodo";

function App() {
    let storageTodos = JSON.parse(localStorage.getItem("todos"));
    if (storageTodos === null) {
        storageTodos = [];
    }
    
    let [todos, setTodos] = useState(storageTodos);
    const [len, setLen] = useState(storageTodos.length)
    // let len2 = storageTodos.length
    // console.log(len);


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
        setLen(len+1)
        window.length = stTodos.length

        document.getElementsByClassName('desc')[0].style.backgroundColor = 'white'
        document.getElementsByClassName('title')[0].style.backgroundColor = 'white'

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
    }

    const handleDone = (id)=>{
        let stTodos = JSON.parse(localStorage.getItem("todos"));
        if (stTodos === null) {
            stTodos = [];
        }
        try {
            if (stTodos[id][0].completed===true) {
                stTodos[id][0].completed = false
                setLen(len+1)
                let t = ""
                if (len+1>1) t = "todos"
                else t = "todo"
                document.getElementsByClassName('text-success')[0].innerHTML = len+1+" "
                document.getElementsByClassName('sentence')[0].innerHTML = t+" remaining"
            } else if (stTodos[id][0].completed===false) {
                stTodos[id][0].completed = true
                setLen(len-1)
            }
            localStorage.setItem("todos", JSON.stringify(stTodos));
            setTodos(stTodos)

        } catch{}
    }

    const handleDelete = (id)=>{
        let stTodos = JSON.parse(localStorage.getItem("todos"));
        if (stTodos === null) {
            stTodos = [];
        }
        

        for (let i=0;i<stTodos.length;i++) {
            if (stTodos[i][0].key===id) {
                if (stTodos[i][0].completed===false) {
                    setLen(len-1)
                }
                stTodos.splice(i, 1)
            }
        }
        localStorage.setItem("todos", JSON.stringify(stTodos));
        setTodos(stTodos)
    }

    const handleEdit = (id)=>{
        let stTodos = JSON.parse(localStorage.getItem("todos"));
        if (stTodos === null) {
            stTodos = [];
        }
        for (let i=0;i<stTodos.length;i++) {
            if (stTodos[i][0].key===id) {
                document.getElementsByClassName('title')[0].value = stTodos[i][0].title
                document.getElementsByClassName('title')[0].style.backgroundColor = 'hsl(195, 100%, 95%)'
                document.getElementsByClassName('desc')[0].value = stTodos[i][0].description
                document.getElementsByClassName('desc')[0].style.backgroundColor = 'hsl(195, 100%, 95%)'
            }
        }
    }

    const [title, setTitle]=  useState("")
    const [desc, setDesc]=  useState("")

    const handleOnChange = (event)=>{
        setTitle(event.target.value)
    }

    const handleOnChange1 = (event)=>{
        setDesc(event.target.value)
    }
    let completedTodos = []

    const completedTasks = ()=> {
        let stTodos = JSON.parse(localStorage.getItem("todos"));
        if (stTodos === null) {
            stTodos = [];
        }
        for (let i=0;i<stTodos.length;i++) {
            if (stTodos[i][0].completed===true) {
                completedTodos.push(stTodos[i])
                setTodos(completedTodos)
                document.getElementsByClassName('text-success')[0].innerHTML = "Completed"
                document.getElementsByClassName('sentence')[0].innerHTML = " tasks"
            }
        }

    }

    return (
        <>
            <Navbar />
            <AddTodo title={title} desc={desc} handleOnChange={handleOnChange} handleOnChange1={handleOnChange1} handleAdd={handleAdd}/>
            <Filters completed={completedTasks}/>
            <Todos del={handleDelete} todos={todos} done={handleDone} edit={handleEdit} len={len}/>
            <Footer />
        </>
    );
}

export default App;

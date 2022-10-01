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
    let [bg, setBg] = useState("")
    let length_ = 0;
    for (let i=0;i<storageTodos.length;i++) {
        if (storageTodos[i][0].completed===false) {
            length_ = length_+1
        }
        // if (storageTodos[i][0].category.toLowerCase()==="work") setBg('yellow')
        // else if (storageTodos[i][0].category.toLowerCase()==="travel") setBg('blue')
        // else if (storageTodos[i][0].category.toLowerCase()==="food") setBg('orange')
        // else if (storageTodos[i][0].category.toLowerCase()==="urgent") setBg('red')
        // else if (storageTodos[i][0].category.toLowerCase()==="entertainment") setBg('green')
    }
    // for (let i=0;i<storageTodos.length;i++) {
    //     if (storageTodos[i][0].category.toLowerCase()==="work") setBg('yellow')
    //     else if (storageTodos[i][0].category.toLowerCase()==="travel") setBg('blue')
    //     else if (storageTodos[i][0].category.toLowerCase()==="food") setBg('orange')
    //     else if (storageTodos[i][0].category.toLowerCase()==="urgent") setBg('red')
    //     else if (storageTodos[i][0].category.toLowerCase()==="entertainment") setBg('green')
    // }

    const [len, setLen] = useState(length_)

    const [isEditing, setEditing] = useState(false)
    const [id, setId] = useState(0)

    const handleAdd = () => {
        let stTodos = JSON.parse(localStorage.getItem("todos"));
        if (stTodos === null) {
            stTodos = [];
        }
        if (isEditing===false) {
            let e = document.getElementById('category')
            var cate = e.options[e.selectedIndex].text;
            stTodos.push([
                {
                    key: stTodos.length,
                    title: document.getElementsByClassName("title")[0].value,
                    description: document.getElementsByClassName("desc")[0].value,
                    due: document.getElementsByClassName('due')[0].value,
                    completed: false,
                    category: cate.toLowerCase()
                },
            ]);
            localStorage.setItem("todos", JSON.stringify(stTodos));
            setTodos(stTodos)
            setLen(len+1)
            window.length = stTodos.length
    
            document.getElementsByClassName("addBTN")[0].innerHTML = "✓";
            document.getElementsByClassName("addBTN")[0].style.backgroundColor =
                "#14A44D";
            document.getElementsByClassName("title")[0].value = "";
            document.getElementsByClassName("desc")[0].value = "";

            document.getElementsByClassName('addContainer')[0].style.boxShadow = "0 2px 2px 0 green"

        } else {
            document.getElementsByClassName('todoTitle')[id].innerHTML = document.getElementsByClassName('title')[0].value
            document.getElementsByClassName('todoDesc')[id].innerHTML = document.getElementsByClassName('desc')[0].value
            for (let i=0;i<stTodos.length;i++) {
                if (stTodos[i][0].key===id) {
                    stTodos[i][0].title = document.getElementsByClassName('title')[0].value
                    stTodos[i][0].description = document.getElementsByClassName('desc')[0].value
                    stTodos[i][0].due = document.getElementsByClassName('due')[0].value
                    stTodos[i][0].category = document.getElementById('category').options[document.getElementById('category').selectedIndex].text.toLowerCase()

                    document.getElementsByClassName('todoDesc')[id].style.backgroundColor = "white"
                    document.getElementsByClassName('card-header')[id].style.backgroundColor = "white"

                    document.getElementsByClassName('desc')[0].style.backgroundColor = 'white'
                    document.getElementsByClassName('title')[0].style.backgroundColor = 'white'
                    document.getElementsByClassName('title')[0].value = ""
                    document.getElementsByClassName('desc')[0].value = ""
                    document.getElementById('category').options[document.getElementById('category').selectedIndex].text = "Work"

                    localStorage.setItem("todos", JSON.stringify(stTodos));
                    setTodos(stTodos)
                }
            }
        }

        
        setTimeout(() => {
            document.getElementsByClassName("addBTN")[0].innerHTML = "+";
            document.getElementsByClassName("addBTN")[0].style.backgroundColor =
                "#332D2D";
                document.getElementsByClassName("wd1")[0].innerHTML = 50
                document.getElementsByClassName("wd")[0].innerHTML = 80
                document.getElementsByClassName('addContainer')[0].style.boxShadow = "0 2px 2px 0 grey"
            }, 1000);
            setEditing(false)
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
                if ((len+1)>1) t = "todos"
                else t = "todo"
                document.getElementsByClassName('bold')[0].innerHTML = (len+1)+" "
                document.getElementsByClassName('sentence')[0].innerHTML = t+" remaining"

                let date = Math.round((new Date(stTodos[id][0].due).getTime()-new Date().getTime())/(1000*60*60*24))
                let color;
                let bg_color
                if (date+1>5) {
                    color= "14A44D"
                    bg_color = "hsl(150, 50%, 80%)"
                }
                else{
                    color = "orangered" 
                    bg_color = "hsl(40, 50%, 80%)"
                } 
                
                if (date ===0){
                    date = "today"
                    document.getElementsByClassName('dueDate')[id].innerHTML = "• Due "+date
                } 
                else if (isNaN(date) || date<0) {
                    date="• No Due Date"
                    document.getElementsByClassName('dueDate')[id].innerHTML = date
                } 
                else {
                    date = (date+1)+"d"
                    document.getElementsByClassName('dueDate')[id].innerHTML = "• Due "+date
                } 
                document.getElementsByClassName('dueDate')[id].style.color = color


            } else if (stTodos[id][0].completed===false) {
                stTodos[id][0].completed = true
                setLen(len-1)
                let t = ""
                if ((len-1)>1) t = "todos"
                else t = "todo"
                document.getElementsByClassName('bold')[0].innerHTML = (len-1)+" "
                document.getElementsByClassName('sentence')[0].innerHTML = t+" remaining"

                document.getElementsByClassName('dueDate')[id].innerHTML = "Done"
                document.getElementsByClassName('dueDate')[id].style.color = "green"
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
                document.getElementsByClassName('title')[0].value= stTodos[i][0].title
                document.getElementsByClassName('desc')[0].value = stTodos[i][0].description
                document.getElementsByClassName('due')[0].value = stTodos[i][0].due
                // document.getElementsByClassName('cat')[0].value = stTodos[i][0].category

                document.getElementsByClassName('title')[0].style.backgroundColor = 'hsl(0, 0%, 95%)'
                document.getElementsByClassName('desc')[0].style.backgroundColor = 'hsl(0, 0%, 95%)'

                document.getElementsByClassName('todoDesc')[id].style.backgroundColor = "hsl(0, 0%, 85%)"
                document.getElementsByClassName('card-header')[id].style.backgroundColor = "hsl(0, 0%, 85%)"


                document.getElementsByClassName('addBTN')[0].innerHTML = "↻"
                setEditing(true)
                setId(id)
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
                document.getElementsByClassName('bold')[0].innerHTML = "Completed"
                document.getElementsByClassName('bold')[0].style.color = "#5cb85c"
                document.getElementsByClassName('sentence')[0].innerHTML = " tasks ("+completedTodos.length+")"
            }
        }

    }

    const allTasks = ()=>{
        let stTodos = JSON.parse(localStorage.getItem("todos"));
        if (stTodos === null) {
            stTodos = [];
        }
        let t = ""
        if (len>1) t = "todos"
        else t = "todo"
        document.getElementsByClassName('bold')[0].innerHTML = len+" "
        document.getElementsByClassName('sentence')[0].innerHTML = t+" remaining"
        document.getElementsByClassName('bold')[0].style.color = "#5cb85c"
        setTodos(stTodos)
    }

    const remainingTasks = ()=> {
        let stTodos = JSON.parse(localStorage.getItem("todos"));
        if (stTodos === null) {
            stTodos = [];
        }
        for (let i=0;i<stTodos.length;i++) {
            if (stTodos[i][0].completed===false) {
                completedTodos.push(stTodos[i])
                setTodos(completedTodos)
                document.getElementsByClassName('bold')[0].innerHTML = "Remaining"
                document.getElementsByClassName('bold')[0].style.color = "#d9534f"
                document.getElementsByClassName('sentence')[0].innerHTML = " tasks ("+completedTodos.length+")"
            }
        }
    }

    const [collapsed, setCollapse] = useState(false)

    const toggleCollapse = ()=>{
        if (collapsed) {
            document.getElementsByClassName("addContainer")[0].style.height = "300px"
            document.getElementsByClassName("addContainer")[0].style.display = "block"

            document.getElementsByClassName("collapse_btn")[0].innerHTML = "⬆"
            setCollapse(false)
        } else {
            document.getElementsByClassName("addContainer")[0].style.height = "0"
            document.getElementsByClassName("addContainer")[0].style.display = "none"

            document.getElementsByClassName("collapse_btn")[0].innerHTML = "⬇"
            setCollapse(true)
        }
    }
   
    return (
        <>
            <Navbar />
            <AddTodo title={title} desc={desc} handleOnChange={handleOnChange} handleOnChange1={handleOnChange1} handleAdd={handleAdd} toggleCollapse={toggleCollapse}/>
            <Filters completed={completedTasks} allTasks={allTasks} remaining={remainingTasks}/>
            <Todos del={handleDelete} todos={todos} done={handleDone} edit={handleEdit} len={len} bg={bg}/>
            <Footer />
        </>
    );
}

export default App;

import "./App.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Todos from "./Components/Todos";
import { useState } from "react";
import AddTodo from "./Components/AddTodo";

function App() {
    let storageTodos = JSON.parse(localStorage.getItem("todos"));
    if (storageTodos === null) {
        storageTodos = [];
    }

    let filters = JSON.parse(localStorage.getItem("filter"));
    if (filters === null) {
        filters = [];
    }
    const [filter, setFilter] = useState(filters)

    
    let [todos, setTodos] = useState(storageTodos);
    let [bg, setBg] = useState("")
    let length_ = 0;
    for (let i=0;i<storageTodos.length;i++) {
        if (storageTodos[i][0].completed===false) {
            length_ = length_+1
        }
        if (storageTodos[i][0].shrink===true) {
            // document.getElementsByClassName('todoContainer')[i].width = "20%"
        }
    }

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
            if (cate.toLowerCase() === 'custom') cate=""
            stTodos.push([
                {
                    key: stTodos.length,
                    title: document.getElementsByClassName("title")[0].value,
                    description: document.getElementsByClassName("desc")[0].value,
                    due: document.getElementsByClassName('due')[0].value,
                    completed: false,
                    starred: false,
                    shrink: false,
                    category: cate.toLowerCase()===""?document.getElementsByClassName('customCat')[0].value:cate.toLowerCase()
                },
            ]);
            localStorage.setItem("todos", JSON.stringify(stTodos));
            setLen(len+1)
            window.length = stTodos.length
            
            document.getElementsByClassName("addBTN")[0].innerHTML = "✓";
            document.getElementsByClassName("addBTN")[0].style.backgroundColor =
                "#14A44D";
            document.getElementsByClassName("title")[0].value = "";
            document.getElementsByClassName("desc")[0].value = "";

            
            document.getElementsByClassName('addContainer')[0].style.boxShadow = "0 2px 2px 0 green"
            
            

            if (cate==='') {
                try {
                    let category = document.getElementsByClassName('customCat')[0].value
                    let color = document.getElementById('exampleColorInput').value
                    let char = document.getElementsByClassName('char')[0].value
    
                    let filters = JSON.parse(localStorage.getItem("filter"));
                    if (filters === null) {
                        filters = [];
                    }
    
                    let obj = {
                        'category': category,
                        'color': color,
                        'char': char
                    }
                    
                    filters.push(obj)
                    setFilter(filters)
                    localStorage.setItem("filter", JSON.stringify(filters));
    
                } catch {}

            }
            document.getElementsByClassName("char")[0].value = "";
            document.getElementsByClassName("cat")[0].value = "";
            document.getElementsByClassName('form-control-color')[0].value = "#000000"

            setTodos(stTodos)
           
        } else {
            window.location.reload(true)

            document.getElementsByClassName('todoTitle')[id].innerHTML = document.getElementsByClassName('title')[0].value
            document.getElementsByClassName('todoDesc')[id].innerHTML = document.getElementsByClassName('desc')[0].value
            
            for (let i=0;i<stTodos.length;i++) {
                if (stTodos[i][0].key===id) {
                    stTodos[i][0].title = document.getElementsByClassName('title')[0].value
                    stTodos[i][0].description = document.getElementsByClassName('desc')[0].value
                    stTodos[i][0].due = document.getElementsByClassName('due')[0].value
                    
                    if (document.getElementById('category').options[document.getElementById('category').selectedIndex].text.toLowerCase() === 'custom') {
                        alert('Cannot Edit Custom Category')
                    } else {
                        stTodos[i][0].category = document.getElementById('category').options[document.getElementById('category').selectedIndex].text.toLowerCase()
                    }

                    document.getElementsByClassName('todoDesc')[id].style.backgroundColor = "white"
                    document.getElementsByClassName('card-header')[id].style.backgroundColor = "white"

                    document.getElementsByClassName('desc')[0].style.backgroundColor = 'white'
                    document.getElementsByClassName('title')[0].style.backgroundColor = 'white'
                    document.getElementsByClassName('title')[0].value = ""
                    document.getElementsByClassName('desc')[0].value = ""

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

    const toggle = (id, type)=>{
        let stTodos = JSON.parse(localStorage.getItem("todos"));
        if (stTodos === null) {
            stTodos = [];
        }
        try {
            if (stTodos[id][0][type]===true) {
                stTodos[id][0][type] = false
                if (type==='completed') {
                    setLen(len+1)
                    let t = ""
                    if ((len+1)>1) t = "todos"
                    else t = "todo"
                    document.getElementsByClassName('bold')[0].innerHTML = (len+1)+" "
                    document.getElementsByClassName('sentence')[0].innerHTML = t+" remaining"
    
                    let date = Math.round((new Date(stTodos[id][0].due).getTime()-new Date().getTime())/(1000*60*60*24))
                    let color;
                    // let bg_color
                    if (date+1>5) {
                        color= "#14A44D"
                        // bg_color = "hsl(150, 50%, 80%)"
                    }
                    else{
                        color = "orangered" 
                        // bg_color = "hsl(40, 50%, 80%)"
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
                } else if (type==='starred') {
                    let t = ""
                    if ((len+1)>1) t = "todos"
                    else t = "todo"
                    for (let i=0;i<stTodos.length;i++) {
                        filterdItems.push(stTodos[i])
                        setTodos(filterdItems)
                        document.getElementsByClassName('bold')[0].innerHTML = (len)+" "
                        document.getElementsByClassName('sentence')[0].innerHTML = t+" remaining"
                    }
                }


            } else if (stTodos[id][0][type]===false) {
                stTodos[id][0][type] = true
                if (type==='completed') {
                    setLen(len-1)
                    let t = ""
                    if ((len-1)>1) t = "todos"
                    else t = "todo"
                    document.getElementsByClassName('bold')[0].innerHTML = (len-1)+" "
                    document.getElementsByClassName('sentence')[0].innerHTML = t+" remaining"
    
                    document.getElementsByClassName('dueDate')[id].innerHTML = "Done"
                    document.getElementsByClassName('dueDate')[id].style.color = "green"

                }
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
        var x = document.getElementById("category");
        x.remove(5);
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
    let filterdItems = []

    const shrink = (id)=>{
        let stTodos = JSON.parse(localStorage.getItem("todos"));
        if (stTodos === null) {
            stTodos = [];
        }
        let a = document.getElementsByClassName('todoContainer')[id]
        if (a.style.width==="50%") {
            stTodos[id][0].shrink = false
            a.style.width='100%'
        } else {
            stTodos[id][0].shrink = true
            a.style.width = "50%"
            document.getElementsByClassName('todoContainer')[id].style.transition = "all .3s ease-in-out"
        }
        localStorage.setItem("todos", JSON.stringify(stTodos));
    }

  
    return (
        <>
            <Navbar />
            <AddTodo title={title} desc={desc} handleOnChange={handleOnChange} handleOnChange1={handleOnChange1} handleAdd={handleAdd}/>
            <Todos del={handleDelete} todos={todos} done={toggle} edit={handleEdit} len={len} bg={bg} shrink={shrink}/>
            <Footer />
        </>
    );
}

export default App;
// 1127px media width
import "./App.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Todos from "./Components/Todos";
import { useState } from "react";

function App() {
  let storageTodos = localStorage.getItem('todo');
  if (storageTodos===null) {
    storageTodos = []
  }
    let [todos, setTodos] = useState(storageTodos);
    
    const del = (sr_no) => {
        let deleted = todos.splice(sr_no - 1, 1);
        setTodos(todos);
        console.log(storageTodos)
    }
    return (
        <>
            <Navbar />
            <Todos del={del} todos={todos} />
            <Footer />
        </>
    )
}

export default App;

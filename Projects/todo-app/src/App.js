import "./App.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Todos from "./Components/Todos";
import { useState } from "react";

function App() {
    const [todos, setTodo] = useState([
        {
            no: "1",
            title: "Trip to Shimla at 20th",
            description: "",
        },
        {
            no: "2",
            title: "Friends Party tonight",
            description:
                "go to Mahil's house at 10:00pm with deep, rudra and dhruv",
        },
    ]);
    const del = (no) => {
      // setTodo(todos.splice(no, 1))
        setTodo(todos.filter((e)=>{
          return e!==no
        }));
        console.log(todos)
    };
    return (
        <>
            <Navbar />
            <h1 className="text-center">Your Todos List</h1>
            <Todos del={del} todos={todos} />;
            <Footer />
        </>
    );
}

export default App;

import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import About from './Components/About';
import {useState} from "react";

function App() {
    const [mode, setMode] = useState("light");
    const toggleMode = () => {
        if (mode === "dark") {
            setMode("light")
            document.getElementsByTagName('body')[0].style.backgroundColor="white"
            document.getElementsByTagName('body')[0].style.color="black"
        } else {
            setMode("dark")
            document.getElementsByTagName('body')[0].style.backgroundColor="hsl(200, 100%, 20%)"
            document.getElementsByTagName('body')[0].style.color="white"
        }
    }
    return (
        <>
            <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode}/>
            <TextForm heading="Enter text to analyze below" mode={mode}/>
            {/* <About/> */}
        </>

    );
}

export default App;

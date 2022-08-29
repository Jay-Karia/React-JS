import './App.css';
import Alert from './Components/Alert'
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import About from './Components/About';
import {useState} from "react";

function App() {
    const [mode, setMode] = useState("light");
    const [theme, setTheme] = useState("light");

    const [alert, setAlert] = useState(null)

    const changeTheme = (bg, font, button, theme) => {
        setTheme({
            bgColor: bg,
            fontColor: font,
            buttonColor: button,
            theme: theme
        })
        if (theme === "red") {
            document.getElementsByTagName('body')[0].style.backgroundColor = bg
            document.getElementsByTagName('body')[0].style.color = "white"
        } else if (theme === "green") {
            document.getElementsByTagName('body')[0].style.backgroundColor = bg
            document.getElementsByTagName('body')[0].style.color = "white"
        } else if (theme === "blue") {
            document.getElementsByTagName('body')[0].style.backgroundColor = bg
            document.getElementsByTagName('body')[0].style.color = "white"
        }
        showAlert("Theme Changed to " + theme + "!", "success")

    }


    const showAlert = (message, type) => {
        setAlert({
            msg: message,
            type: type
        })
        setTimeout(() => {
            setAlert(null)
        }, 3000)
    }

    const toggleMode = () => {
        if (mode === "dark") {
            setMode("light")
            document.getElementsByTagName('body')[0].style.backgroundColor = "white"
            document.getElementsByTagName('body')[0].style.color = "black"
            showAlert("Light Mode has been enabled", "success")
        } else {
            setMode("dark")
            document.getElementsByTagName('body')[0].style.backgroundColor = "black"
                // document.getElementsByTagName('body')[0].style.backgroundColor="hsl(200, 100%, 30%)"
            document.getElementsByTagName('body')[0].style.color = "white"
            showAlert("Dark Mode has been enabled", "success")
        }
    }

    return (
        < >
        <Navbar title = "TextUtils"
        aboutText = "About TextUtils"
        mode = { mode }
        toggleMode = { toggleMode }
        changeTheme = { changeTheme }
        theme = { theme }/>
         <Alert alert = { alert }/> 
         <TextForm heading = "Enter text to analyze below" showAlert = { showAlert } theme = { theme }/> 
        </>

    );
}

export default App;
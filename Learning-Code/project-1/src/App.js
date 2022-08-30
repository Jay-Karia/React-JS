import "./App.css";
import Alert from "./Components/Alert";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import About from "./Components/About";
import { useState } from "react";

function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  //   const [theme, setTheme] = useState('light')
  const applyTheme = (bg, font, special, button, cls) => {
    console.log(bg);
    document.getElementsByTagName("body")[0].style.backgroundColor = bg;
    document.getElementsByTagName("body")[0].style.color = font;
    for (let i = 0; i < 3; i++)
      document.getElementsByClassName("sp")[i].style.color = special;
    document.getElementsByTagName("textarea")[0].style.backgroundColor =
      special;
    document.getElementsByTagName("nav")[0].style.color = font;
    for (let j=0;j<7;j++)
    document.getElementsByTagName("button")[j].style.backgroundColor = button;

    showAlert('Theme changed', cls)
  };

  return (
    <>
      <Navbar
        title="TextUtils"
        aboutText="About TextUtils"
        applyTheme={applyTheme}
      />
      <Alert alert={alert} />
      <TextForm heading="Enter text to analyze below" showAlert={showAlert} />
    </>
  );
}

export default App;

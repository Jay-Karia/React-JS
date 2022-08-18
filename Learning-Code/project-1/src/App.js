import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import About from './Components/About';

function App() {
  return (
    <>
    <Navbar title="TextUtils" aboutText="About TextUtils"/>
    {/* <TextForm heading="Enter text to analyze below"/> */}
    <About/>
    </>

  );
}

export default App;

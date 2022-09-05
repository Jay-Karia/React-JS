import './App.css';
import Navbar from './Components/Navbar';
import Todo from './Components/Todo';

function App() {
  return (
    <>
    <Navbar/>
    <h1 className="text-center my-4">
        Welcome to <span style={{color: 'green'}}>Todo App</span> created by Jay
    </h1>
    <Todo/>
    </>
  );
}

export default App;

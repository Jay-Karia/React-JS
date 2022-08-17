import logo from './logo.svg';
import './App.css';

function App() {
  let name = "Jay"
  return (
    <>
      <nav>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </nav>

      <div className="container">
      <h1>Hello {name}</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus autem corrupti unde laborum sit ratione incidunt voluptatibus, tenetur nostrum, neque distinctio tempora a eius sed rerum ea culpa facere ab nulla at, quaerat sint!</p>
      </div>
    </>
  );
}

export default App;

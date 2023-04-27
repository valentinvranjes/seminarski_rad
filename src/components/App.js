import logo from '../assets/images/logo.svg';
import '../assets/styles/App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Moja prva aplikacija
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          ></a>
          Learn React
      </header>
    </div>
  );
}

export default App;

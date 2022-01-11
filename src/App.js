import logo from './logo.svg';
import './App.css';
import Navigation from './Navigation';

function App() {
  return (
    <div className="App">
      <Navigation logo={logo} />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Areli's Flowers And Co.
        </h1>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

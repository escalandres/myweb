import logo from './logo.svg';
import './App.css';
import Auth from './components/Auth';
// import Router from './components/Router';

function App() {
  return (
    <div className="App">
      <header className="">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        {/* <Router/> */}
        <Auth/>
      </header>
    </div>
  );
}

export default App;

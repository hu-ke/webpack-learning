import './App.css';
import React from 'react' // 为什么要加上？
import Button from './Button'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React ss <Button />
        </a>
      </header>
    </div>
  );
}

export default App;

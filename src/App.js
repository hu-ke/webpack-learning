import './public-path'
import './App.css';
import React, { useEffect, useState } from 'react' // 为什么要加上？
import Button from './Button'
import icon from './assets/icon.png'

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    module?.hot?.accept('./Button.js', () => {
      setCount(count => {
        return count+1
      })
    })
    console.log(ENV)
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.{count}
        </p>
        <img src={icon} />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button />
      </header>
    </div>
  );
}

export default App;

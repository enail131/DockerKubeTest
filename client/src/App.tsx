import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [testString, setTestString] = useState<{testString: string}>({testString: ""});
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    fetch('api:3001/api/testRoute', {
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(data => {
        setTestString(data);
      })
      .catch(e => {
        console.error(e);
      });
  }, [setTestString]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload {testString.testString}.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <div>This has been clicked {count} times</div>
        <button onClick={() => setCount(count + 1)}>Click here</button>
      </header>
    </div>
  );
}

export default App;

import React, { useRef, useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'

const hello = () => fetch('http://localhost:4000').then(data => data.json())

const App: React.FC = () => {
  const go = useRef(hello)
  const [res, resSet] = useState()
  useEffect(() => {
    go.current().then(({ data }) => {
      resSet(data)
    })
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Res: {res}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App

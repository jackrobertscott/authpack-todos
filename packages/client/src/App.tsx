import React, { useRef, useEffect, useState } from 'react'
import axios from 'axios'
import logo from './logo.svg'
import './App.css'

const send = async ({
  query,
  variables,
  operationName,
}: {
  query: string
  variables?: { [key: string]: any }
  operationName?: string
}) => {
  const { data } = await axios({
    url: 'http://localhost:4000',
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    data: {
      query,
      variables,
      operationName,
    },
  })
  return data
}

const App: React.FC = () => {
  const go = useRef(() => {
    return send({
      query: `query {
        todo: GetTodo {
          content
        }
      }`,
    })
  })
  const [res, resSet] = useState()
  useEffect(() => {
    go.current().then(({ data }) => {
      resSet(data.todo.content)
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

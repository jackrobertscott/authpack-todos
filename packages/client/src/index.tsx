import React, { FC } from 'react'
import ReactDOM from 'react-dom'
import { App } from './components/App'
import * as serviceWorker from './serviceWorker'
import * as Authpack from '@authpack/react'

const Root: FC = () => {
  return (
    <Authpack.Provider
      value={{
        key: 'wga-client-key-12e587f383ecf62f17ba30828',
        options: {
          enable_teams: true,
          prompt_teams: true,
        },
      }}>
      <App />
    </Authpack.Provider>
  )
}

ReactDOM.render(<Root />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()

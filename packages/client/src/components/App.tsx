import React, { useEffect } from 'react'
import { useSend } from '../utils/send'
import { Wrapper } from './Wrapper'
import { Home } from './Home'
import { useAuthpack } from '@authpack/react'
import { Todos } from './Todos'

export const App: React.FC = () => {
  const authpack = useAuthpack()
  const stuff = useSend<{ todo: { content: string } }>(`query {
    todo: GetTodo {
      content
    }
  }`)
  useEffect(() => {
    stuff.fetch()
    // eslint-disable-next-line
  }, [])
  return (
    <Wrapper>
      {!authpack.ready ? (
        <div>Loading...</div>
      ) : authpack.user && authpack.team ? (
        <Todos />
      ) : (
        <Home />
      )}
    </Wrapper>
  )
}

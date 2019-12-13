import React, { useEffect } from 'react'
import { useSend } from '../utils/send'

export const App: React.FC = () => {
  const stuff = useSend()
  useEffect(() => {
    stuff.fetch({
      query: `query {
        todo: GetTodo {
          content
        }
      }`,
    })
  }, [])
  return <div>{stuff.value?.todo?.content}</div>
}

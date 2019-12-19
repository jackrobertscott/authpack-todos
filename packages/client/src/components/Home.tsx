import React, { FC } from 'react'
import { css } from 'emotion'
import { useGadgets, useAuthpack } from '@authpack/react'

export const Home: FC = () => {
  const gadgets = useGadgets()
  const authpack = useAuthpack()
  return (
    <div
      className={css({
        padding: 20,
        fontSize: 15,
        color: '#111',
        textAlign: 'center',
      })}>
      <h1
        className={css({
          marginBottom: 10,
          fontSize: 25,
        })}>
        Team Todos
      </h1>
      <p>
        {authpack.user && !authpack.team
          ? 'Please create a team'
          : 'Solve problem as a team'}
      </p>
      <button
        onClick={() => gadgets.show()}
        className={css({
          marginTop: 20,
          padding: '20px 50px',
          background: '#1F2026',
          color: '#FFF',
          border: 'none',
          borderRadius: 10,
          fontSize: 20,
          fontWeight: 'bold',
          outline: 'none',
          transition: '200ms',
          cursor: 'pointer',
          '&:hover': {
            background: '#303347',
            boxShadow: '0 0 15px hsla(0, 0%, 15%, 25%)',
          },
        })}>
        Start Now
      </button>
    </div>
  )
}

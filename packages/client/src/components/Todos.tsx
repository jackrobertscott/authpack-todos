import React, { FC } from 'react'
import { css } from 'emotion'
import { useAuthpack, useGadgets } from '@authpack/react'

export const Todos: FC = () => {
  const gadgets = useGadgets()
  const authpack = useAuthpack()
  return (
    <div>
      <div
        className={css({
          borderRadius: 10,
          background: '#1F2026',
          color: '#FFF',
          width: 400,
          height: 500,
        })}>
        <div
          className={css({
            padding: 20,
          })}>
          <div>{authpack.team?.name}</div>
          <div>Hello</div>
        </div>
      </div>
      <div onClick={() => gadgets.exit()}>Logout</div>
    </div>
  )
}

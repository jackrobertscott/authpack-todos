import React, { FC, ReactNode } from 'react'
import { css } from 'emotion'

export const Wrapper: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div
      className={css({
        margin: 0,
        padding: 0,
        height: '100vh',
        width: '100vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: '#C0C0F5',
      })}>
      {children}
    </div>
  )
}

import { Pico } from '../../src'
import React from 'react'

export const DarkThemePicoStyles = ({ children }: React.PropsWithChildren<unknown>) => (
    <div style={{ background: '#333333', padding: '20px' }} >
        <Pico theme='dark'>
            {children}
        </Pico>
    </div>
)
import { Pico } from '../../src'
import React from 'react'

export const LightThemePicoStyles = ({ children }: React.PropsWithChildren<unknown>) => (
    <div style={{ background: '#ffffff', padding: '20px' }} >
        <Pico theme='light'>
            {children}
        </Pico>
    </div>
)
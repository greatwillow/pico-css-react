import picoSlim from '../styles/scoped-pico-slim'
import { PicoTheme } from '../types'
import React from 'react'

export default (props: React.PropsWithChildren<{ theme: PicoTheme }>) => (
    <div className={picoSlim}>
        <div className='pico-styles'>
            <div  data-theme={props.theme}>
                {props.children}
            </div>
        </div>
    </div>
)

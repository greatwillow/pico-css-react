import pico from '../styles/scoped-pico'
import { PicoTheme } from '../types'
import React from 'react'

export default (props: React.PropsWithChildren<{ theme: PicoTheme }>) => (
    <div className={pico}>
        <div className='pico-styles'>
            <div  data-theme={props.theme}>
                {props.children}
            </div>
        </div>
    </div>
)

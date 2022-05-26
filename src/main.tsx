import React from 'react'
import { picoStyles } from './picoStyles'
import { PicoTheme } from './types'

export const Main = (props: React.PropsWithChildren<{ theme: PicoTheme }>) => (
	<div className={picoStyles}>
		<div className='pico-styles' data-theme={props.theme}>
			{props.children}
		</div>
	</div>
)

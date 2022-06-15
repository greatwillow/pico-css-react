import React from 'react'
import picoSlim from '../styles/scoped-pico-slim'
import { PicoTheme } from '../types'

export default (props: React.PropsWithChildren<{ theme: PicoTheme }>) => (
	<div className={picoSlim}>
		<div className='pico-styles'>
			<div  data-theme={props.theme}>
				{props.children}
			</div>
		</div>
	</div>
)

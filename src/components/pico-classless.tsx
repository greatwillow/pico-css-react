import React from 'react'
import picoClassless from '../styles/scoped-pico-classless'
import { PicoTheme } from '../types'

export default (props: React.PropsWithChildren<{ theme: PicoTheme }>) => (
	<div className={picoClassless}>
		<div className='pico-styles'>
			<div  data-theme={props.theme}>
				{props.children}
			</div>
		</div>
	</div>
)

import React from 'react'
import picoFluidClassless from '../styles/scoped-pico-fluid-classless'
import { PicoTheme } from '../types'

export default (props: React.PropsWithChildren<{ theme: PicoTheme }>) => (
	<div className={picoFluidClassless}>
		<div className='pico-styles'>
			<div  data-theme={props.theme}>
				{props.children}
			</div>
		</div>
	</div>
)

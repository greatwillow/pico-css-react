import React from 'react'
import { PicoStylesComponent } from '../../src'

export const LightThemePicoStyles = ({ children }: React.PropsWithChildren<unknown>) => (
	<div style={{ background: '#ffffff', padding: '20px' }} >
		<PicoStylesComponent theme='light'>
			{children}
		</PicoStylesComponent>
	</div>
)
import React from 'react'
import { PicoStylesComponent } from '../../src'

export const LightThemePicoStyles = ({ children }: React.PropsWithChildren<unknown>) => (
	<div style={{ background: '#000000', padding: '20px' }} >
		<PicoStylesComponent theme='light'>
			{children}
		</PicoStylesComponent>
	</div>
)
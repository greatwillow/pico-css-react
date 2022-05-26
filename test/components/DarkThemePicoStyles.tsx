import React from 'react'
import { PicoStylesComponent } from '../../src'

export const DarkThemePicoStyles = ({ children }: React.PropsWithChildren<unknown>) => (
	<div style={{ background: '#333333', padding: '20px' }} >
		<PicoStylesComponent theme='dark'>
			{children}
		</PicoStylesComponent>
	</div>
)
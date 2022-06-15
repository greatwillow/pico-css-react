import React from 'react'
import { Pico } from '../../src'

export const LightThemePicoStyles = ({ children }: React.PropsWithChildren<unknown>) => (
	<div style={{ background: '#ffffff', padding: '20px' }} >
		<Pico theme='light'>
			{children}
		</Pico>
	</div>
)
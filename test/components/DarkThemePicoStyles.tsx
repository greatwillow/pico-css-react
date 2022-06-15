import React from 'react'
import { Pico } from '../../src'

export const DarkThemePicoStyles = ({ children }: React.PropsWithChildren<unknown>) => (
	<div style={{ background: '#333333', padding: '20px' }} >
		<Pico theme='dark'>
			{children}
		</Pico>
	</div>
)
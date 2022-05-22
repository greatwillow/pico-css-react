import React from 'react'
import { picoStyles } from './picoStyles'

export const Main = (props: React.PropsWithChildren<unknown>) => {

	return (
		<div className={picoStyles}>
			<div className='pico-styles' data-theme="dark">
				{props.children}
			</div>
		</div>
	)
}
/**
 * @jest-environment jsdom
 */
import React from 'react'
import { PicoStylesComponent } from '../src/index'
import { generateImage } from 'jsdom-screenshot'
import { render } from '@testing-library/react'
import { toMatchImageSnapshot } from 'jest-image-snapshot'
import { setDefaultOptions } from 'jsdom-screenshot'
import { Accordians } from './sections/Accordions'
import { Article } from './sections/Article'
import { Buttons } from './sections/Buttons'
import { Form } from './sections/Form'
import { Loading } from './sections/Loading'
import { Preview } from './sections/Preview'
import { Progress } from './sections/Progress'
import { Tables } from './sections/Tables'
import { Typography } from './sections/Typography'

// Docker requires --no-sandbox to be able to run the tests
setDefaultOptions({
	launch: { args: ['--no-sandbox'] }
});

// Make sure jest has enough time to capture the screenshots
jest.setTimeout(15000);

expect.extend({ toMatchImageSnapshot })

describe('Pico test html sections', () => {
	it('Accordians styles have no visual regressions', async () => {
		render(
			<PicoStylesComponent>
				<Accordians />
			</PicoStylesComponent>
		)

		const screenshot = await generateImage()
		expect(screenshot).toMatchImageSnapshot()
	})

	it('Article styles have no visual regressions', async () => {
		render(
			<PicoStylesComponent>
				<Article />
			</PicoStylesComponent>
		)

		const screenshot = await generateImage()
		expect(screenshot).toMatchImageSnapshot()
	})

	it('Buttons styles have no visual regressions', async () => {
		render(
			<PicoStylesComponent>
				<Buttons />
			</PicoStylesComponent>
		)

		const screenshot = await generateImage()
		expect(screenshot).toMatchImageSnapshot()
	})

	it('Form styles have no visual regressions', async () => {
		render(
			<PicoStylesComponent>
				<Form />
			</PicoStylesComponent>
		)

		const screenshot = await generateImage()
		expect(screenshot).toMatchImageSnapshot()
	})

	it('Loading styles have no visual regressions', async () => {
		render(
			<PicoStylesComponent>
				<Loading />
			</PicoStylesComponent>
		)

		const screenshot = await generateImage()
		expect(screenshot).toMatchImageSnapshot()
	})

	it('Preview styles have no visual regressions', async () => {
		render(
			<PicoStylesComponent>
				<Preview />
			</PicoStylesComponent>
		)

		const screenshot = await generateImage()
		expect(screenshot).toMatchImageSnapshot()
	})

	it('Progress styles have no visual regressions', async () => {
		render(
			<PicoStylesComponent>
				<Progress />
			</PicoStylesComponent>
		)

		const screenshot = await generateImage()
		expect(screenshot).toMatchImageSnapshot()
	})

	it('Tables styles have no visual regressions', async () => {
		render(
			<PicoStylesComponent>
				<Tables />
			</PicoStylesComponent>
		)

		const screenshot = await generateImage()
		expect(screenshot).toMatchImageSnapshot()
	})

	it('Typography styles have no visual regressions', async () => {
		render(
			<PicoStylesComponent>
				<Typography />
			</PicoStylesComponent>
		)

		const screenshot = await generateImage()
		expect(screenshot).toMatchImageSnapshot()
	})
})

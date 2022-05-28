/**
 * @jest-environment jsdom
 */
import React from 'react'
import { generateImage } from 'jsdom-screenshot'
import { render } from '@testing-library/react'
// import { toMatchImageSnapshot } from 'jest-image-snapshot'
// import { setDefaultOptions } from 'jsdom-screenshot'
import { Accordions } from './components/sections/Accordions'
import { Article } from './components/sections/Article'
import { Buttons } from './components/sections/Buttons'
import { Form } from './components/sections/Form'
import { Loading } from './components/sections/Loading'
import { Preview } from './components/sections/Preview'
import { Progress } from './components/sections/Progress'
import { Tables } from './components/sections/Tables'
import { Typography } from './components/sections/Typography'
import { DarkThemePicoStyles } from './components/DarkThemePicoStyles'
import { LightThemePicoStyles } from './components/LightThemePicoStyles'

// Docker requires --no-sandbox to be able to run the tests
// setDefaultOptions({
// 	launch: { args: ['--no-sandbox'] }
// })

// // Make sure jest has enough time to capture the screenshots
// jest.setTimeout(15000)

// expect.extend({ toMatchImageSnapshot })

describe('Pico test html sections', () => {
	describe('For dark theme', () => {
		it('Accordians styles have no visual regressions', async () => {
			render(
				<DarkThemePicoStyles>
					<Accordions />
				</DarkThemePicoStyles>
			)

			const screenshot = await generateImage()
			expect(screenshot).toMatchImageSnapshot()
		})

		it('Article styles have no visual regressions', async () => {
			render(
				<DarkThemePicoStyles>
					<Article />
				</DarkThemePicoStyles>
			)

			const screenshot = await generateImage()
			expect(screenshot).toMatchImageSnapshot()
		})

		it('Buttons styles have no visual regressions', async () => {
			render(
				<DarkThemePicoStyles>
					<Buttons />
				</DarkThemePicoStyles>
			)

			const screenshot = await generateImage()
			expect(screenshot).toMatchImageSnapshot()
		})

		it('Form styles have no visual regressions', async () => {
			render(
				<DarkThemePicoStyles>
					<Form />
				</DarkThemePicoStyles>
			)

			const screenshot = await generateImage()
			expect(screenshot).toMatchImageSnapshot()
		})

		it('Loading styles have no visual regressions', async () => {
			render(
				<DarkThemePicoStyles>
					<Loading />
				</DarkThemePicoStyles>
			)

			const screenshot = await generateImage()
			expect(screenshot).toMatchImageSnapshot({
				customDiffConfig: {
					threshold: 0.5
				}
			})
		})

		it('Preview styles have no visual regressions', async () => {
			render(
				<DarkThemePicoStyles>
					<Preview />
				</DarkThemePicoStyles>
			)

			const screenshot = await generateImage()
			expect(screenshot).toMatchImageSnapshot()
		})

		it('Progress styles have no visual regressions', async () => {
			render(
				<DarkThemePicoStyles>
					<Progress />
				</DarkThemePicoStyles>
			)

			const screenshot = await generateImage()
			expect(screenshot).toMatchImageSnapshot()
		})

		it('Tables styles have no visual regressions', async () => {
			render(
				<DarkThemePicoStyles>
					<Tables />
				</DarkThemePicoStyles>
			)

			const screenshot = await generateImage()
			expect(screenshot).toMatchImageSnapshot()
		})

		it('Typography styles have no visual regressions', async () => {
			render(
				<DarkThemePicoStyles>
					<Typography />
				</DarkThemePicoStyles>
			)

			const screenshot = await generateImage()
			expect(screenshot).toMatchImageSnapshot()
		})
	}),
		describe('For light theme', () => {
			it('Accordians styles have no visual regressions', async () => {
				render(
					<LightThemePicoStyles>
						<Accordions />
					</LightThemePicoStyles>
				)

				const screenshot = await generateImage()
				expect(screenshot).toMatchImageSnapshot()
			})

			it('Article styles have no visual regressions', async () => {
				render(
					<LightThemePicoStyles>
						<Article />
					</LightThemePicoStyles>
				)

				const screenshot = await generateImage()
				expect(screenshot).toMatchImageSnapshot()
			})

			it('Buttons styles have no visual regressions', async () => {
				render(
					<LightThemePicoStyles>
						<Buttons />
					</LightThemePicoStyles>
				)

				const screenshot = await generateImage()
				expect(screenshot).toMatchImageSnapshot()
			})

			it('Form styles have no visual regressions', async () => {
				render(
					<LightThemePicoStyles>
						<Form />
					</LightThemePicoStyles>
				)

				const screenshot = await generateImage()
				expect(screenshot).toMatchImageSnapshot()
			})

			it('Loading styles have no visual regressions', async () => {
				render(
					<LightThemePicoStyles>
						<Loading />
					</LightThemePicoStyles>
				)

				const screenshot = await generateImage()
				expect(screenshot).toMatchImageSnapshot({
					customDiffConfig: {
						threshold: 0.5
					}
				})
			})

			it('Preview styles have no visual regressions', async () => {
				render(
					<LightThemePicoStyles>
						<Preview />
					</LightThemePicoStyles>
				)

				const screenshot = await generateImage()
				expect(screenshot).toMatchImageSnapshot()
			})

			it('Progress styles have no visual regressions', async () => {
				render(
					<LightThemePicoStyles>
						<Progress />
					</LightThemePicoStyles>
				)

				const screenshot = await generateImage()
				expect(screenshot).toMatchImageSnapshot()
			})

			it('Tables styles have no visual regressions', async () => {
				render(
					<LightThemePicoStyles>
						<Tables />
					</LightThemePicoStyles>
				)

				const screenshot = await generateImage()
				expect(screenshot).toMatchImageSnapshot()
			})

			it('Typography styles have no visual regressions', async () => {
				render(
					<LightThemePicoStyles>
						<Typography />
					</LightThemePicoStyles>
				)

				const screenshot = await generateImage()
				expect(screenshot).toMatchImageSnapshot()
			})
		})
})

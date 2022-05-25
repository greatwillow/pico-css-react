/**
 * @jest-environment jsdom
 */
import React from 'react'
import { PicoStylesComponent } from '../src/index';
import { generateImage } from 'jsdom-screenshot';
import { render } from '@testing-library/react';
import { toMatchImageSnapshot } from 'jest-image-snapshot'
import { setDefaultOptions } from 'jsdom-screenshot';
import { Accordians } from './sections/Accordions';

// Docker requires --no-sandbox to be able to run the tests
setDefaultOptions({
	launch: { args: ['--no-sandbox'] }
});

// Make sure jest has enough time to capture the screenshots
jest.setTimeout(15000);

expect.extend({ toMatchImageSnapshot })

it('has no visual regressions', async () => {
	render(
		<PicoStylesComponent>
			<Accordians />
		</PicoStylesComponent>
	);

	const screenshot = await generateImage();
	expect(screenshot).toMatchImageSnapshot();
});
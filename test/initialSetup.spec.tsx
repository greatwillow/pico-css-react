/**
 * @jest-environment jsdom
 */
import React from 'react'
import { PicoStylesComponent } from '../src/index';
import { generateImage } from 'jsdom-screenshot';
import { render } from '@testing-library/react';
import { toMatchImageSnapshot } from 'jest-image-snapshot'

expect.extend({ toMatchImageSnapshot })

it('has no visual regressions', async () => {
	render(<PicoStylesComponent />);

	const screenshot = await generateImage();
	expect(screenshot).toMatchImageSnapshot();
});
import React from 'react'

export const Form = () => (
	<section id="form">
		<form>
			<h2>Form elements</h2>

			{ /* Search */}
			<label htmlFor="search">Search</label>
			<input type="search" id="search" name="search" placeholder="Search" />

			{ /* Text */}
			<label htmlFor="text">Text</label>
			<input type="text" id="text" name="text" placeholder="Text" />
			<small>Curabitur consequat lacus at lacus porta finibus.</small>

			{ /* Select */}
			<label htmlFor="select">Select</label>
			<select id="select" name="select" defaultValue="1" required>
				<option value="1">Select…</option>
				<option value="2">…</option>
			</select>

			{ /* File Browser */}
			<label htmlFor="file">File browser
				<input type="file" id="file" name="file" />
			</label>

			{ /* Range Slider Control */}
			<label htmlFor="range">Range slider
				<input type="range" min="0" max="100" defaultValue="50" id="range" name="range" />
			</label>

			{ /* Valid */}
			<label htmlFor="valid">
				Valid
				<input type="text" id="valid" name="valid" placeholder="Valid" aria-invalid="false" />
			</label>

			{ /* Invalid */}
			<label htmlFor="invalid">
				Invalid
				<input type="text" id="invalid" name="invalid" placeholder="Invalid" aria-invalid="true" />
			</label>

			{ /* Disabled */}
			<label htmlFor="disabled">
				Disabled
				<input type="text" id="disabled" name="disabled" placeholder="Disabled" disabled />
			</label>

			{ /* Date */}
			<label htmlFor="date">Date
				<input type="date" id="date" name="date" />
			</label>

			{ /* Time */}
			<label htmlFor="time">Time
				<input type="time" id="time" name="time" />
			</label>

			{ /* Color */}
			<label htmlFor="color">Color
				<input type="color" id="color" name="color" defaultValue="#0eaaaa" />
			</label>

			{ /* Checkboxes */}
			<fieldset>
				<legend><strong>Checkboxes</strong></legend>
				<label htmlFor="checkbox-1">
					<input type="checkbox" id="checkbox-1" name="checkbox-1" defaultChecked />
					Checkbox
				</label>
				<label htmlFor="checkbox-2">
					<input type="checkbox" id="checkbox-2" name="checkbox-2" />
					Checkbox
				</label>
			</fieldset>

			{ /* Radio Buttons */}
			<fieldset>
				<legend><strong>Radio buttons</strong></legend>
				<label htmlFor="radio-1">
					<input type="radio" id="radio-1" name="radio" value="radio-1" defaultChecked />
					Radio button
				</label>
				<label htmlFor="radio-2">
					<input type="radio" id="radio-2" name="radio" value="radio-2" />
					Radio button
				</label>
			</fieldset>

			{ /* Switch */}
			<fieldset>
				<legend><strong>Switches</strong></legend>
				<label htmlFor="switch-1">
					<input type="checkbox" id="switch-1" name="switch-1" role="switch" defaultChecked />
					Switch
				</label>
				<label htmlFor="switch-2">
					<input type="checkbox" id="switch-2" name="switch-2" role="switch" />
					Switch
				</label>
			</fieldset>

			{ /* Buttons */}
			<input type="reset" value="Reset" onClick={(event) => event.preventDefault()} />
			<input type="submit" value="Submit" onClick={(event) => event.preventDefault()} />

		</form>
	</section>
)

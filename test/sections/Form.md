---
defines-react-components: true
react-components-namespace: picoExample.sections
---

```jsx:component:Form

return (
	<section id="form">
		<form>
			<h2>Form elements</h2>

			{ /* Search */ }
			<label for="search">Search</label>
			<input type="search" id="search" name="search" placeholder="Search" />

			{ /* Text */ }
			<label for="text">Text</label>
			<input type="text" id="text" name="text" placeholder="Text" />
			<small>Curabitur consequat lacus at lacus porta finibus.</small>

			{ /* Select */ }
			<label for="select">Select</label>
			<select id="select" name="select" required>
			<option value="" selected>Select…</option>
			<option>…</option>
			</select>

			{ /* File Browser */ }
			<label for="file">File browser
			<input type="file" id="file" name="file" />
			</label>

			{ /* Range Slider Control */ }
			<label for="range">Range slider
			<input type="range" min="0" max="100" value="50" id="range" name="range" />
			</label>

			{ /* Valid */ }
			<label for="valid">
			Valid
			<input type="text" id="valid" name="valid" placeholder="Valid" aria-invalid="false" />
			</label>

			{ /* Invalid */ }
			<label for="invalid">
			Invalid
			<input type="text" id="invalid" name="invalid" placeholder="Invalid" aria-invalid="true" />
			</label>

			{ /* Disabled */ }
			<label for="disabled">
			Disabled
			<input type="text" id="disabled" name="disabled" placeholder="Disabled" disabled />
			</label>

			{ /* Date */ }
			<label for="date">Date
			<input type="date" id="date" name="date" />
			</label>

			{ /* Time */ }
			<label for="time">Time
			<input type="time" id="time" name="time" />
			</label>

			{ /* Color */ }
			<label for="color">Color
			<input type="color" id="color" name="color" value="#0eaaaa" />
			</label>

			{ /* Checkboxes */ }
			<fieldset>
			<legend><strong>Checkboxes</strong></legend>
			<label for="checkbox-1">
				<input type="checkbox" id="checkbox-1" name="checkbox-1" checked />
				Checkbox
			</label>
			<label for="checkbox-2">
				<input type="checkbox" id="checkbox-2" name="checkbox-2" />
				Checkbox
			</label>
			</fieldset>

			{ /* Radio Buttons */ }
			<fieldset>
			<legend><strong>Radio buttons</strong></legend>
			<label for="radio-1">
				<input type="radio" id="radio-1" name="radio" value="radio-1" checked />
				Radio button
			</label>
			<label for="radio-2">
				<input type="radio" id="radio-2" name="radio" value="radio-2" />
				Radio button
			</label>
			</fieldset>

			{ /* Switch */ }
			<fieldset>
			<legend><strong>Switches</strong></legend>
			<label for="switch-1">
				<input type="checkbox" id="switch-1" name="switch-1" role="switch" checked />
				Switch
			</label>
			<label for="switch-2">
				<input type="checkbox" id="switch-2" name="switch-2" role="switch" />
				Switch
			</label>
			</fieldset>

			{ /* Buttons */ }
			<input type="reset" value="Reset" onclick="event.preventDefault()" />
			<input type="submit" value="Submit" onclick="event.preventDefault()" />

		</form>
	</section>
)

```
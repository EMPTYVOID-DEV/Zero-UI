<script>
	/**
	 * @typedef {Object} Props
	 * @property {string} [name]
	 * @property {string} [value]
	 * @property {string} [label]
	 * @property {"text"|"password"|"email"|"number"} [inputType]
	 * @property {boolean} [disabled]
	 * @property {(ev:Event & { currentTarget: EventTarget & HTMLInputElement; })=>void} [handleChange]
	 */

	/** @type {Props} */
	let {
		value = $bindable(''),
		name = '',
		label = '',
		inputType = 'text',
		disabled = false,
		handleChange
	} = $props();
</script>

<div class="input-container" class:disabled>
	<label for="input">{label}</label>
	<input type={inputType} {disabled} bind:value {name} oninput={handleChange} />
</div>

<style>
	.input-container {
		width: var(--width, 100%);
		display: flex;
		flex-direction: column;
		align-items: stretch;
		gap: 0.5rem;
	}

	.input-container label {
		font-family: var(--headerFont);
		font-size: var(--body);
		font-weight: bold;
		color: var(--foregroundColor);
	}

	.input-container label:empty {
		display: none;
	}
	.input-container input {
		width: 100%;
		padding-left: 0.5rem;
		padding-block: 0.5rem;
		font-size: var(--body);
		font-family: var(--bodyFont);
		color: var(--foregroundColor);
		background-color: transparent;
		border-radius: var(--border-radius);
		border: 2px solid var(--foregroundColor);
		outline: none;
	}
	.input-container input:focus {
		border-color: var(--primaryColor);
		background-color: color-mix(in srgb, var(--primaryColor) 30%, transparent 70%);
	}
	.input-container input[type='number']::-webkit-outer-spin-button,
	.input-container input::-webkit-inner-spin-button {
		-webkit-appearance: none;
	}
	.disabled input {
		border-color: var(--mutedColor);
		color: var(--mutedColor);
	}
	.disabled label {
		color: var(--mutedColor);
	}
</style>

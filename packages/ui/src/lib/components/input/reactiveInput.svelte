<script>
	import CloseIcon from '../../icons/closeIcon.svelte';

	/**
	 * @typedef {Object} Status
	 * @property {'valid' | 'invalid'|'idle'} state
	 * @property {string} errorMsg
	 */

	/**
	 * @typedef {Object} CheckStatus
	 * @property {'valid' | 'invalid'} state
	 * @property {string} errorMsg
	 */

	/**
	 * @typedef {Object} Props
	 * @property {string} [name]
	 * @property {string} [value]
	 * @property {string} [label]
	 * @property {"text"|"password"|"email"|"number"} [inputType]
	 * @property {boolean} [disabled]
	 * @property {(ev:Event & { currentTarget: EventTarget & HTMLInputElement; })=>void} [handleChange]
	 * @property {(currentValue:string)=>CheckStatus} checkFunction
	 */

	/** @type {Props} */
	let {
		name = '',
		value = $bindable(''),
		label = '',
		inputType = 'text',
		disabled = false,
		handleChange,
		checkFunction
	} = $props();

	/**
	 * @type {Status}
	 */
	let status = $state({
		state: 'idle',
		errorMsg: ''
	});
</script>

<div class="input-container {status.state}" class:disabled>
	<label for="input">{label}</label>
	<input
		{name}
		{disabled}
		bind:value
		type={inputType}
		oninput={(e) => {
			status = checkFunction(e.currentTarget.value);
			handleChange?.(e);
		}}
	/>
	{#if status.state == 'invalid'}
		<div class="error">
			<CloseIcon />
			<span>{status.errorMsg}</span>
		</div>
	{/if}
</div>

<style>
	.idle {
		--main-color: var(--primaryColor);
	}
	.valid {
		--main-color: var(--successColor);
	}

	.invalid {
		--icon: var(--dangerColor);
		--main-color: var(--dangerColor);
	}

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
		text-transform: capitalize;
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
		border-color: var(--main-color);
		background-color: color-mix(in srgb, var(--main-color) 30%, transparent 70%);
	}
	.input-container input[type='number']::-webkit-outer-spin-button,
	.input-container input::-webkit-inner-spin-button {
		-webkit-appearance: none;
	}
	.error {
		display: grid;
		grid-template-columns: auto 1fr;
		align-items: center;
		gap: 0.25rem;
	}
	.error span {
		font-size: var(--small);
		font-family: var(--bodyFont);
		color: var(--main-color);
		text-transform: capitalize;
	}
	.disabled input {
		border-color: var(--mutedColor);
		color: var(--mutedColor);
	}
	.disabled label {
		color: var(--mutedColor);
	}
	.disabled .error {
		display: none;
	}
</style>

<script>
	/**
	 * @typedef {Object} Props
	 * @property {string} [name]
	 * @property {string} [value]
	 * @property {boolean} [disabled]
	 * @property {string} [label]
	 * @property {(value:string)=>void} [handleChange]
	 */

	/** @type {Props} */
	let { name = '', value = $bindable(''), disabled = false, label = '', handleChange } = $props();

	/**@type {(e:Event & { currentTarget: EventTarget & HTMLTextAreaElement})=>void}*/
	function onInput(e) {
		handleChange?.(e.currentTarget.value);
	}
</script>

<div class="textarea">
	<label for="texarea">{label}</label>
	<textarea id="texarea" bind:value {disabled} {name} oninput={onInput}></textarea>
</div>

<style>
	.textarea {
		width: var(--width, 100%);
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}
	.textarea label {
		font-family: var(--headerFont);
		font-size: var(--body);
		font-weight: bold;
		color: var(--foregroundColor);
	}
	.textarea label:empty {
		display: none;
	}
	.textarea textarea {
		outline: none;
		resize: none;
		width: 100%;
		height: var(--height, 100px);
		padding-left: 0.5rem;
		overflow: auto;
		background-color: transparent;
		border: 2px solid var(--foregroundColor);
		color: var(--foregroundColor);
		font-family: var(--bodyFont);
		font-size: var(--body);
		border-radius: var(--border-radius);
	}
	.textarea textarea:focus {
		border-color: var(--primaryColor);
	}
	.textarea :global(::-webkit-scrollbar) {
		width: 0.5rem;
	}
	.textarea :global(::-webkit-scrollbar-track) {
		border-radius: 0;
		background: color-mix(in srgb, var(--mutedColor) 40%, transparent 60%);
	}

	.textarea :global(::-webkit-scrollbar-thumb) {
		border-radius: 0.25rem;
		background: color-mix(in srgb, var(--primaryColor) 60%, transparent 40%);
	}
</style>

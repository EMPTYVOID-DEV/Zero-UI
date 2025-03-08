<script>
	import Select from 'svelte-select';

	/**
	 * @typedef SelectData
	 * @property {any} value
	 * @property {string} label
	 */

	/**
	 * @typedef {Object} Props
	 * @property {string} [placeholder]
	 * @property {string} [label]
	 * @property {SelectData[]} [elements]
	 * @property {SelectData[]} [value]
	 * @property {boolean} [disabled]
	 * @property {string} [name]
	 * @property {boolean} [isMulti]
	 * @property {boolean} [clearable]
	 * @property {(selected:SelectData[])=>void} [handleChange]
	 * @property {(query:string)=>Promise<SelectData[]>} [asyncLoad]
	 */

	/** @type {Props} */
	let {
		placeholder = '',
		label = '',
		elements = [],
		value = [],
		disabled = false,
		name = '',
		isMulti = false,
		clearable = false,
		handleChange,
		asyncLoad
	} = $props();
	const processedValue = isMulti ? value : value[0];

	/**
	 * @param {Event & {detail:SelectData[]|SelectData|null}} e
	 */
	function onInput(e) {
		if (!e.detail) {
			handleChange?.([]);
			return;
		}
		if (isMulti) {
			handleChange?.(/**@type {SelectData[]}*/ (e.detail));
		} else {
			handleChange?.([/**@type {SelectData}*/ (e.detail)]);
		}
	}
</script>

<div class="select" class:disabled>
	<label for="select">{label}</label>
	<Select
		searchable
		loadOptions={asyncLoad}
		value={processedValue}
		multiple={isMulti}
		items={elements}
		showChevron={!disabled}
		hideEmptyState={true}
		{clearable}
		{name}
		{placeholder}
		{disabled}
		on:input={onInput}
		--chevron-color="var(--primaryColor)"
		--clear-icon-color="var(--primaryColor)"
		--background="transparent"
		--placeholder-color="var(--foregroundColor)"
		--font-size="var(--body)"
		--input-color="var(--foregroundColor)"
		--list-background="var(--backgroundColor)"
		--list-border="1px solid var(--primaryColor)"
		--list-border-radius="var(--border-radius)"
		--selected-item-color="var(--foregroundColor)"
		--multi-item-bg="transparent"
		--multi-item-color="var(--foregroundColor)"
		--item-color="var(--foregroundColor)"
		--item-first-border-radius="0"
		--item-hover-bg="color-mix(in srgb , var(--primaryColor) 40%, transparent 60%)"
		--item-hover-color="var(--foregroundColor)"
		--item-is-active-color="var(--foregroundColor)"
		--item-is-active-bg="var(--primaryColor)"
		--border="2px solid var(--foregroundColor)"
		--border-focused="2px solid var(--primaryColor)"
		--border-hover="2px solid var(--foregroundColor)"
		--disabled-color="var(--mutedColor)"
		--disabled-background="transparent"
		--disabled-border-color="var(--mutedColor)"
		--list-z-index="999"
	></Select>
</div>

<style>
	.select {
		width: var(--width, 100%);
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.select label {
		font-family: var(--headerFont);
		font-size: var(--body);
		font-weight: bold;
		color: var(--foregroundColor);
		text-transform: capitalize;
	}
	.select label:empty {
		display: none;
	}
	.disabled label {
		color: var(--mutedColor);
	}
</style>

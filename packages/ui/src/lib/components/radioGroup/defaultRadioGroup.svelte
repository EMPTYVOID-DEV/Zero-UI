<script>
	import RadioItem from './radioItem.svelte';

	/**
	 * @typedef {Object} RadioItem
	 * @property {string} text
	 * @property {boolean} checked
	 * @property {string} [description]
	 */

	/**
	 * @typedef {Object} Props
	 * @property {boolean} [disabled]
	 * @property {RadioItem[]} [radioGroup]
	 * @property {(choiceItem:RadioItem)=>void} [handleChange]
	 */

	/** @type {Props} */
	let { disabled = false, radioGroup = $bindable([]), handleChange } = $props();

	/**
	 * @param {number} choiceIndex
	 */
	function toggleRadioGroup(choiceIndex) {
		if (disabled) return;
		for (let i = 0; i < radioGroup.length; i++) {
			if (i === choiceIndex) {
				const oldStatus = radioGroup[i].checked;
				radioGroup[i].checked = !oldStatus;
			} else {
				radioGroup[i].checked = false;
			}
		}
		handleChange?.(radioGroup[choiceIndex]);
	}
</script>

<div class="radioGroup">
	{#each radioGroup as radioItem, index}
		<RadioItem {disabled} {radioItem} onclick={() => toggleRadioGroup(index)} />
	{/each}
</div>

<style>
	.radioGroup {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}
</style>

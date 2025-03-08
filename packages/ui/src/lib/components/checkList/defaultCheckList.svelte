<script>
	import CheckItem from './checkItem.svelte';

	/**
	 * @typedef {Object} CheckItem
	 * @property {string} text
	 * @property {boolean} checked
	 * @property {boolean} [disabled]
	 * @property {string} [description]
	 */

	/**
	 * @typedef {Object} Props
	 * @property {CheckItem[]} [checkList]
	 * @property {(checkedItem:CheckItem)=>void} [handleChange]
	 */

	/** @type {Props} */
	let { checkList = $bindable([]), handleChange } = $props();

	/**
	 * @param {number} itemIndex
	 */
	function toggleCheckListItem(itemIndex) {
		if (checkList[itemIndex].disabled) return;
		const newStatus = !checkList[itemIndex].checked;
		checkList[itemIndex].checked = newStatus;
		handleChange?.(checkList[itemIndex]);
	}
</script>

<div class="checkList">
	{#each checkList as checkItem, index}
		<CheckItem {checkItem} onclick={() => toggleCheckListItem(index)} />
	{/each}
</div>

<style>
	.checkList {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}
</style>

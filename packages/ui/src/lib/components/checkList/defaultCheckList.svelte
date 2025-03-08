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
	 */

	/** @type {Props} */
	let { checkList = $bindable([]) } = $props();

	/**
	 * @param {number} itemIndex - The index of the checkList item that changed its status.
	 */
	function toggleCheckListItem(itemIndex) {
		if (checkList[itemIndex].disabled) return;
		const oldStatus = checkList[itemIndex].checked;
		checkList[itemIndex].checked = !oldStatus;
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

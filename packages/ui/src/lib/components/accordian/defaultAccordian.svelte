<script>
	import AccordianItem from './accordianItem.svelte';

	/**
	 * @typedef {Object} Props
	 * @property {{title:string,description:string}[]} [accordianList]
	 */

	/** @type {Props} */
	let { accordianList = [] } = $props();
</script>

<div class="accordian">
	{#each accordianList as item}
		<AccordianItem title={item.title} description={item.description} />
	{/each}
</div>

<style>
	.accordian {
		width: var(--width, 100%);
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}
</style>

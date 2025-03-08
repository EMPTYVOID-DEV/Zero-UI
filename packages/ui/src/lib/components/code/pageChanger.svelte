<script>
	/**
	 * @typedef {Object} Props
	 * @property {string[]} [pages]
	 * @property {number} activePage
	 */

	/** @type {Props} */
	let { pages = [], activePage = $bindable() } = $props();
</script>

<div class="pageSlider">
	{#each pages as page, index}
		<button
			class:active={activePage == index}
			onclick={() => {
				activePage = index;
			}}>{page}</button
		>
	{/each}
</div>

<style>
	.pageSlider {
		display: flex;
		align-items: center;
	}
	.pageSlider button {
		all: unset;
		font-family: var(--bodyFont);
		font-size: var(--body);
		color: var(--foregroundColor);
		padding-inline: 1rem;
		padding-block: 0.5rem;
		cursor: pointer;
	}
	.pageSlider .active {
		color: var(--backgroundColor);
		border-top-left-radius: 0.25rem;
		border-top-right-radius: 0.25rem;
		background-color: var(--foregroundColor);
		font-weight: 600;
	}
</style>

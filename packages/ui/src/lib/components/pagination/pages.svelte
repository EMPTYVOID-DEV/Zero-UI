<script>
	import DotsIcon from '../../icons/dotsIcon.svelte';

	/**
	 * @typedef {Object} Props
	 * @property {number} start
	 * @property {number} activePage
	 * @property {number} end
	 * @property {number} numberOfPages
	 */

	/** @type {Props} */
	let { start, activePage = $bindable(), end, numberOfPages } = $props();
</script>

<div class="pages">
	{#if start !== 1}
		<button class="page" onclick={() => (activePage = 1)}>1</button>
		<span class="delimiter">
			<DotsIcon />
		</span>
	{/if}

	{#each Array(numberOfPages) as page, index}
		{#if index + 1 <= end && index + 1 >= start}
			<button
				class="page"
				class:active={index + 1 === activePage}
				onclick={() => (activePage = index + 1)}>{index + 1}</button
			>
		{/if}
	{/each}

	{#if end !== numberOfPages}
		<span class="delimiter">
			<DotsIcon />
		</span>
		<button class="page" onclick={() => (activePage = numberOfPages)}>{numberOfPages}</button>
	{/if}
</div>

<style>
	.pages {
		display: flex;
		align-items: center;
		gap: 0.25rem;
	}
	.page {
		min-width: 2.25rem;
		min-height: 2.25rem;
		display: flex;
		justify-content: center;
		align-items: center;
		border: none;
		outline: none;
		background-color: transparent;
		color: var(--foregroundColor);
		background-color: transparent;
		font-size: var(--small);
		font-family: var(--bodyFont);
		border-radius: 0.25rem;
		cursor: pointer;
	}
	.active {
		background-color: var(--primaryColor);
		color: var(--backgroundColor);
	}
	.page:not(.active):hover {
		background-color: color-mix(in srgb, var(--primaryColor) 40%, transparent 60%);
	}
	.delimiter {
		--icon: var(--foregroundColor);
	}
</style>

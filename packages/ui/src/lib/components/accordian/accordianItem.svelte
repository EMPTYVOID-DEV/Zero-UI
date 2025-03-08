<script>
	import UpIcon from '../../icons/upIcon.svelte';
	import DownIcon from '../../icons/downIcon.svelte';
	import { slide } from 'svelte/transition';

	/**
	 * @typedef {Object} Props
	 * @property {string} title
	 * @property {string} description
	 * @property {boolean} [show]
	 */

	/** @type {Props} */
	let { title, description, show = $bindable(false) } = $props();
</script>

<button class="accordianItem" onclick={() => (show = !show)}>
	<div class="title">
		<span>{title}</span>
		{#if show}
			<UpIcon />
		{:else}
			<DownIcon />
		{/if}
	</div>
	{#if show}
		<span class="description" transition:slide>{description}</span>
	{/if}
</button>

<style>
	.accordianItem {
		all: unset;
		display: flex;
		flex-direction: column;
		padding-block: 0.5rem;
		padding-inline: 1rem;
		cursor: pointer;
		border-radius: var(--border-radius);
		border: 2px solid color-mix(in srgb, var(--primaryColor) 60%, transparent 40%);
	}
	.title {
		display: grid;
		grid-template-columns: auto auto;
		align-items: center;
		justify-content: space-between;
		gap: 0.25rem;
	}

	.title span {
		font-weight: bold;
	}

	.description {
		margin-top: 0.5rem;
	}

	span {
		color: var(--foregroundColor);
		font-size: var(--body);
		font-family: var(--bodyFont);
	}
</style>

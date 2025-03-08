<script>
	import LoadingIcon from '../../icons/loadingIcon.svelte';

	/**
	 * @typedef {Object} Props
	 * @property {import('svelte').Snippet} loading
	 */

	/** @type {Props} */
	let { loading } = $props();
</script>

<div class="loading">
	<LoadingIcon />
	{@render loading()}
</div>

<style>
	.loading {
		display: flex;
		align-items: center;
		gap: 0.25rem;
	}
	.loading :global(svg) {
		width: 2.5rem;
		height: 2.5rem;
	}
</style>

<script>
	import RightIcon from '../../icons/rightIcon.svelte';
	import LeftIcon from '../../icons/leftIcon.svelte';
	import Pages from './pages.svelte';

	/**
	 * @typedef {Object} Props
	 * @property {number} [numberOfPages]
	 * @property {number} [activePage]
	 */
	/** @type {Props}*/
	let { activePage = $bindable(1), numberOfPages = 5 } = $props();

	let siblingsCount = 1;
	let visiblePages = $derived(adjustToActive(activePage));

	/**
	 * @function adjustToActive
	 * @param {number} activePage
	 * @returns {{ start: number; end: number; }}
	 */
	function adjustToActive(activePage) {
		let start = Math.max(1, activePage - siblingsCount);
		let end = Math.min(numberOfPages, activePage + siblingsCount);
		let pagesDiff = siblingsCount * 2 - (end - start);

		if (pagesDiff !== 0) {
			if (end + pagesDiff <= numberOfPages) end += pagesDiff;
			else if (start - pagesDiff >= 1) start -= pagesDiff;
		}

		if (numberOfPages - end === 1) end = numberOfPages;

		if (start - 1 === 1) start = 1;

		return {
			start,
			end
		};
	}
</script>

<div class="pagination">
	<button class="control" disabled={activePage === 1} onclick={() => (activePage -= 1)}>
		<LeftIcon />
	</button>

	<Pages bind:activePage start={visiblePages.start} end={visiblePages.end} {numberOfPages} />

	<button disabled={activePage === numberOfPages} class="control" onclick={() => (activePage += 1)}>
		<RightIcon />
	</button>
</div>

<style>
	.pagination {
		display: flex;
		align-items: center;
		gap: 0.25rem;
	}
	.control {
		display: flex;
		align-items: center;
		justify-content: center;
		min-width: 2.25rem;
		min-height: 2.25rem;
		cursor: pointer;
		outline: none;
		border: none;
		border-radius: 0.25rem;
		background-color: transparent;
		--icon: var(--foregroundColor);
	}
	.control:not(:disabled):hover {
		background-color: color-mix(in srgb, var(--primaryColor) 40%, transparent 60%);
	}

	.control:disabled {
		--icon: var(--mutedColor);
		cursor: default;
	}
</style>

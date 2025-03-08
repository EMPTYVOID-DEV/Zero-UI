<script>
	import { quadInOut } from 'svelte/easing';
	import { scale } from 'svelte/transition';
	import CloseIcon from '../../icons/closeIcon.svelte';
	import SearchIcon from '../../icons/searchIcon.svelte';
	import Dialog from '../dialog/defaultDialog.svelte';
	import Category from './category.svelte';
	import SearchInput from './searchInput.svelte';

	/**
	 * @typedef {Object} SubSection
	 * @property {string} subSectionName
	 * @property {string} link
	 * @property {boolean} [isHeader]
	 */

	/**
	 * @typedef {Object} Section
	 * @property {string} link
	 * @property {string} sectionName
	 * @property {SubSection[]} [subSections]
	 */

	/**
	 * @typedef {Object} Category
	 * @property {string} categoryName
	 * @property {Section[]} sections
	 */

	/**
	 * @typedef  {Object} Props
	 * @property {boolean} [showFullMobile]
	 * @property {Category[]} [categories]
	 * @property {string} [placeholder]
	 * @property {(query:string)=>void} [handleChange]
	 */

	/** @type {Props} */
	let {
		showFullMobile = false,
		categories = [],
		placeholder = 'Search ...',
		handleChange
	} = $props();

	/**@function handleChange*/
	/**@type {(e:Event & {currentTarget: EventTarget & HTMLInputElement; })=>void}*/
	function onInput(e) {
		handleChange?.(e.currentTarget.value);
	}
</script>

<Dialog>
	{#snippet trigger({ open })}
		<SearchInput
			{showFullMobile}
			{placeholder}
			onclick={() => open()}
			onkeyup={(e) => {
				if (e.ctrlKey && e.shiftKey && e.key == 'K') open();
			}}
		/>
	{/snippet}
	{#snippet children({ close })}
		<main
			class="searchModel"
			transition:scale={{
				duration: 400,
				easing: quadInOut,
				start: 0,
				opacity: 0.2
			}}
		>
			<nav class="searchBar">
				<SearchIcon />
				<input type="text" {placeholder} oninput={onInput} />
				<button class="close" onclick={() => close()}>
					<CloseIcon />
				</button>
			</nav>
			<div class="categories">
				{#each categories as category}
					<Category {category} />
				{/each}
			</div>
		</main>
	{/snippet}
</Dialog>

<style>
	.searchModel {
		width: 50vw;
		max-height: 60vh;
		display: flex;
		flex-direction: column;
		background-color: var(--backgroundColor);
		border-radius: var(--border-radius);
		border: 2px solid var(--primaryColor);
	}
	.searchBar {
		width: 100%;
		display: flex;
		align-items: center;
		padding: 0.5rem;
		border-bottom: 1px solid color-mix(in srgb, var(--mutedColor) 40%, transparent 60%);
	}
	.searchBar input {
		flex-grow: 1;
		border: none;
		outline: none;
		color: var(--foregroundColor);
		background-color: transparent;
		font-size: var(--body);
		font-family: var(--bodyFont);
	}

	.searchBar .close {
		all: unset;
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 2px;
		border-radius: 50%;
		border: 1px solid var(--primaryColor);
		cursor: pointer;
	}
	.categories {
		width: 100%;
		display: flex;
		flex-direction: column;
		overflow-y: auto;
	}
	.searchModel ::-webkit-scrollbar {
		width: 0.5rem;
	}
	.searchModel ::-webkit-scrollbar-track {
		border-radius: 0;
		background: color-mix(in srgb, var(--mutedColor) 40%, transparent 60%);
	}

	.searchModel ::-webkit-scrollbar-thumb {
		border-radius: 0.25rem;
		background: color-mix(in srgb, var(--primaryColor) 60%, transparent 40%);
	}

	@media screen and (width<768px) {
		.searchModel {
			width: 90vw;
		}
	}
</style>

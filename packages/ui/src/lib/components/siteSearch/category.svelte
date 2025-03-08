<script>
	import Section from './section.svelte';

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
	 * @typedef {Object} Props
	 * @property {Category} category
	 */

	/** @type {Props} */
	let { category } = $props();
</script>

<div class="category">
	<span>{category.categoryName}</span>
	<div class="sections">
		{#each category.sections as section}
			<Section {section} />
		{/each}
	</div>
</div>

<style>
	.category {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		padding: 0.5rem;
		border-bottom: 1px solid color-mix(in srgb, var(--mutedColor) 40%, transparent 60%);
	}
	.category:last-child {
		border: 0;
	}
	.category span {
		color: var(--primaryColor);
		font-size: var(--small);
		font-family: var(--bodyFont);
		font-weight: bold;
	}
	.sections {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}
</style>

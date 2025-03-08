<script>
	import HashIcon from '../../icons/hashIcon.svelte';
	import SubMenuIcon from '../../icons/subMenuIcon.svelte';
	import FileIcon from '../../icons/fileIcon.svelte';

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
	 *
	 * @typedef {Object} Props
	 * @property {Section} section
	 */

	/** @type {Props} */
	let { section } = $props();
</script>

<section class="section">
	<a class="link" href={section.link}>
		<FileIcon />
		<span>{section.sectionName}</span>
	</a>
	{#if section.subSections}
		<div class="subSections">
			{#each section.subSections as subSection}
				<a href={subSection.link} class="link">
					{#if subSection.isHeader || false}
						<HashIcon />
					{:else}
						<SubMenuIcon />
					{/if}
					<span>{subSection.subSectionName}</span>
				</a>
			{/each}
		</div>
	{/if}
</section>

<style>
	.section,
	.subSections {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}
	.link {
		display: flex;
		align-items: center;
		gap: 0.25rem;
		padding: 0.5rem;
		border-radius: 0.25rem;
		text-decoration: none;
	}
	.link :global(svg) {
		width: 1.25rem;
		height: 1.25rem;
		--icon: var(--foregroundColor);
	}
	.link span {
		color: var(--foregroundColor);
		font-size: var(--small);
		font-family: var(--bodyFont);
		text-transform: capitalize;
	}
	.link:hover {
		background-color: color-mix(in srgb, var(--primaryColor) 30%, transparent 70%);
	}
	.subSections {
		margin-left: 0.75rem;
		padding-left: 0.5rem;
		border-left: 2px solid var(--foregroundColor);
	}
</style>

<script>
	import { DefaultTabs } from 'zero-ui-registry';
	import BrainStorming from '$lib/components/icons/brain.svelte';
	import Modeling from '$lib/components/icons/modeling.svelte';
	import Development from '$lib/components/icons/development.svelte';
	import Testing from '$lib/components/icons/test.svelte';
	let activeTab = 0;
	const tabs = [
		'Generate ideas and concepts for the project.',
		"Create models and representations of the project's architecture, design, and data structures.",
		'Write and implement the actual code based on the approved models.',
		'Verify and validate the software to ensure it meets requirements and functions correctly.'
	];
</script>

<div class="tabsWrapper">
	<DefaultTabs
		bind:activeTab
		tabs={[
			{
				title: 'Brainstorming',
				icon: BrainStorming
			},
			{
				title: 'Modeling',
				icon: Modeling
			},
			{
				title: 'Development',
				icon: Development
			},
			{
				title: 'Testing',
				icon: Testing
			}
		]}
		on:change={(e) => console.log(e.detail.activeTab)}
	/>
	<p>{tabs[activeTab]}</p>
</div>

<style>
	.tabsWrapper {
		width: 100%;
		display: flex;
		flex-direction: column;
		gap: 2rem;
	}
	.tabsWrapper p {
		color: var(--foregroundColor);
		font-size: var(--body);
		font-family: var(--bodyFont);
		font-weight: 600;
	}
</style>

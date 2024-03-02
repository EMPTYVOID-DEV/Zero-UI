<script>
	import { DefaultTabs } from 'zero-ui-registry';

	export let activeTab = 0;
	/**@type {string[]}*/
	export let tabs = [];
	export let showTabs = true;
</script>

<div class="wrapper">
	{#if showTabs}
		<DefaultTabs tabs={tabs.map((el) => ({ title: el }))} bind:activeTab on:change />
	{/if}
	<slot />
</div>

<style>
	.wrapper {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 2rem;
	}
</style>

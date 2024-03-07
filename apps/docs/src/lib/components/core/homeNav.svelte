<script>
	import Logo from '$lib/components/icons/logo.svelte';
	import Github from '$lib/components/icons/github.svelte';
	import { DefaultLink as Link, ThemeToggle } from 'zero-ui-registry';
	import { onMount } from 'svelte';
	import SearchDefault from '$lib/components/zeroUIWrappers/defaultSiteSearch.svelte';
	import { page } from '$app/stores';
	import { getContext } from 'svelte';
	/**@type {"dark"|"light"}*/
	let theme = 'light';
	let categories = getContext('searchContent');
	onMount(() => {
		const html = document.querySelector('html');
		const dataset = html?.dataset;
		// @ts-ignore
		if (dataset) theme = dataset.theme;
	});
</script>

<nav class="homeNav">
	<a class="logo" href="/">
		<Logo />
	</a>
	<div class="links">
		<Link href="/docs/Getting Started/Introduction" text="docs" isBlank={false} />
		<Link href="/components/accordian/default" text="components" isBlank={false} />
	</div>

	<div class="utility">
		<ThemeToggle on:change active={theme} --left="-50px" --top="40px" />
		<Link href="https://github.com/EMPTYVOID-DEV/Zero-UI" icon={Github} text="" />
	</div>
	{#key $page.url}
		<SearchDefault {categories} placeholder="Search ..." --width="200px" />
	{/key}
</nav>

<style>
	.homeNav {
		width: 100%;
		height: 80px;
		display: flex;
		align-items: center;
		padding-inline: 0.75rem;
		gap: 0.5rem;
	}
	.logo {
		display: flex;
		align-items: center;
		justify-content: center;
		margin-right: auto;
	}

	.links,
	.utility {
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}
</style>

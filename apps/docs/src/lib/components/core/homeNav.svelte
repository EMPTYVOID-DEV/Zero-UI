<script>
	import Logo from '$lib/components/icons/logo.svelte';
	import Github from '$lib/components/icons/github.svelte';
	import { Link, ThemeToggle } from 'zero-ui-registry';
	import { onMount } from 'svelte';
	import SearchDefault from '$lib/components/zeroUIWrappers/searchDefault.svelte';
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
		<Link href="https://github.com/EMPTYVOID-DEV/Zero-UI" icon={Github} text="" />
		<ThemeToggle on:change active={theme} --left="-50px" --top="40px" />
	</div>
	{#key $page.url}
		<SearchDefault {categories} placeholder="Search for components" />
	{/key}
</nav>

<style>
	.homeNav {
		width: 100%;
		height: 80px;
		display: flex;
		align-items: center;
		padding-inline: 12px;
		gap: 12px;
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
		gap: 8px;
	}
	@media screen and (width <768px) {
		.links {
			display: none;
		}
		.homeNav {
			padding-left: 2px;
		}
	}
</style>

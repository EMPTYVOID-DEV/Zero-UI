<script>
	import Logo from '$lib/components/icons/logo.svelte';
	import Github from '$lib/components/icons/github.svelte';
	import { Link, SiteSearch, ThemeToggle } from 'zero-ui-registry';
	import { onMount } from 'svelte';
	import { categories } from '$lib/utils/const';
	import { filterCategories } from '$lib/utils/client';
	/**@type {"dark"|"light"|"system"}*/
	let theme = 'light';
	let filteredCategories = categories;
	onMount(() => {
		theme = /** @type {"dark"|"light"|"system"}*/ (window.localStorage.getItem('theme') || 'light');
	});
</script>

<nav class="homeNav">
	<a class="logo" href="/">
		<Logo />
	</a>
	<div class="links">
		<Link text="core" href="/docs/core/introduction" />
		<Link text="components" href="/docs/components/accordian" />
	</div>
	<div class="utility">
		<Link href="https://github.com/EMPTYVOID-DEV/Zero-UI" icon={Github} text="" />
		<ThemeToggle on:change active={theme} --left="-50px" --top="40px" />
	</div>
	<SiteSearch
		categories={filteredCategories}
		on:change={(e) => {
			filteredCategories = filterCategories(e.detail.query);
		}}
	/>
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

	@media screen and (width<768px) {
		.links {
			display: none;
		}
	}
</style>

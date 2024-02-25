<script>
	import { Main } from 'sveltedocsmaker';
	import { page } from '$app/stores';
	import DocsNav from '$lib/components/core/docsNav.svelte';
	import { onMount } from 'svelte';
	import { changeMode } from 'sveltedocsmaker/utils';
	const sectionsMap = new Map([
		['Getting Started', ['Introduction', 'Installation', 'Theming', 'Components', 'Jsdoc', 'Cli']]
	]);

	$: data = $page.data;
	onMount(() => {
		const html = document.querySelector('html');
		const dataset = html?.dataset;
		if (dataset && dataset.theme == 'dark') changeMode(false);
	});
</script>

<Main
	{sectionsMap}
	{data}
	pathname={$page.url.pathname}
	CustomNavBar={DocsNav}
	darkBgColor="#1a1a1a"
	lightBgColor="#ffffff"
	darkPrimary="#d4322c"
	lightPrimary="#d4322c"
	lightFontColor="#1a1a1a"
	darkFontColor="#ffffff"
	headingFont="'Playfair Display', serif"
	bodyFont="Arial, Helvetica, sans-serif"
/>

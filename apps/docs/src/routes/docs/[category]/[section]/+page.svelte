<script>
	import { Main } from 'sveltedocsmaker';
	import { page } from '$app/stores';
	import DocsNav from '$lib/components/core/docsNav.svelte';
	import { onMount } from 'svelte';
	import { changeMode } from 'sveltedocsmaker/utils';
	import CodeMdHandler from '$lib/components/md/codeMdHandler.svelte';
	const sectionsMap = new Map([
		[
			'Getting Started',
			[
				'Introduction',
				'Installation',
				'Folder structure',
				'Components',
				'Theming',
				'Jsdoc',
				'Registry.json'
			]
		]
	]);
	/**@type {any}*/
	$: data = $page.data;
	onMount(() => {
		const html = document.querySelector('html');
		const dataset = html?.dataset;
		if (dataset && dataset.theme == 'dark') changeMode(false);
		else changeMode(true);
	});
</script>

<Main
	mdHandlers={{
		code: CodeMdHandler
	}}
	{sectionsMap}
	{data}
	pathname={$page.url.pathname}
	CustomNavBar={DocsNav}
	darkBgColor="#000000"
	lightBgColor="#ffffff"
	darkPrimary="#3498db"
	lightPrimary="#1076ba"
	lightFontColor="#000000"
	darkFontColor="#ffffff"
	headingFont="Arial, Helvetica, sans-serif"
	bodyFont="Arial, Helvetica, sans-serif"
/>

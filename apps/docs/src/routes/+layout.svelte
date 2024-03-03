<script>
	import '../app.css';
	import { onMount, setContext } from 'svelte';
	import { page } from '$app/stores';
	import { themeStore } from '$lib/utils/stores';
	setContext('searchContent', $page.data.searchContent);
	onMount(() => {
		const html = document.querySelector('html');
		/**@type {any}*/
		const dataset = html?.dataset;
		if (dataset) themeStore.set(dataset.theme);
	});
</script>

<slot />

<script>
	import '../app.css';
	import { setContext } from 'svelte';
	import { page } from '$app/stores';
	setContext('searchContent', $page.data.searchContent);
</script>

<slot />

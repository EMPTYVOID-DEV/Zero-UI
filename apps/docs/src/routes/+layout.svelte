<script>
	import '../app.css';
	import { changeTheme } from '$lib/utils/client';
	import { onMount } from 'svelte';
	onMount(() => {
		let theme = /** @type {"dark"|"light"|"system"}*/ (
			window.localStorage.getItem('theme') || 'light'
		);
		changeTheme(theme);
	});
</script>

<slot />

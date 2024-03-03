<script>
	import { themeStore } from '$lib/utils/stores';
	import { SinglePageCode } from 'zero-ui-registry';
	/**@type {string} */
	export let text;
	/**@type {string} */
	export let lang;
	$: darkMode = $themeStore == 'dark';
</script>

<SinglePageCode code={text} {darkMode} />

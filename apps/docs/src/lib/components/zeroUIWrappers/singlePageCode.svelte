<script>
	import { SinglePageCode } from 'zero-ui-registry';
	import { themeStore } from '$lib/utils/stores';
	$: darkMode = $themeStore == 'dark';
</script>

<SinglePageCode {darkMode} code="console.log(12)" />

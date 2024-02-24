<script>
	import { themeStore } from '$lib/utils/store';
	import { SinglePageCode } from 'zero-ui-registry';
	$: darkMode = $themeStore == 'dark';
</script>

<SinglePageCode code="console.log(12)" {darkMode} />

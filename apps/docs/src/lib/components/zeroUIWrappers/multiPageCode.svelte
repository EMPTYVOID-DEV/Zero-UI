<script>
	import { codePages } from '$lib/utils/const';
	import { themeStore } from '$lib/utils/stores';
	import { MultiPageCode } from 'zero-ui-registry';
	$: darkMode = $themeStore == 'dark';
</script>

<MultiPageCode {codePages} {darkMode} --max-height="400px" on:change />

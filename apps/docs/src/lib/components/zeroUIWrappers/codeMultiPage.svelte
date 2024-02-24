<script>
	import { codePages } from '$lib/utils/const';
	import { MultiPageCode } from 'zero-ui-registry';
	import { themeStore } from '$lib/utils/store';

	$: darkMode = $themeStore == 'dark';
</script>

<MultiPageCode {codePages} --max-height="400px" {darkMode} />

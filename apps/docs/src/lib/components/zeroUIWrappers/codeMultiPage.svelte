<script>
	import { codePages } from '$lib/utils/const';
	import { MultiPageCode } from 'zero-ui-registry';
	import { onMount } from 'svelte';
</script>

<MultiPageCode {codePages} --max-height="400px" on:change />

<script>
	import { codePages } from '$lib/utils/const';
	import { MultiPageCode } from 'zero-ui-registry';
</script>

<MultiPageCode {codePages} --max-height="400px" on:change />

<script>
	import { AsyncButton } from 'zero-ui-registry';
</script>

<AsyncButton
	--padding-inline="24px"
	--padding-block="12px"
	action={() => {
		return new Promise((res) => setTimeout(res, 1200));
	}}
/>

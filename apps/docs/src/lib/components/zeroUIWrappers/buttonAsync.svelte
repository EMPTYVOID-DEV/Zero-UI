<script>
	import { AsyncButton } from 'zero-ui-registry';
</script>

<AsyncButton
	action={() => {
		return new Promise((res) => setTimeout(res, 1200));
	}}
/>

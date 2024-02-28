<script>
	import { onMount } from 'svelte';
	import { ContinuosProgress } from 'zero-ui-registry';
	let progress = 0;
	onMount(() => {
		const intervalId = setInterval(() => {
			progress++;
			if (progress == 100) clearInterval(intervalId);
		}, 100);
	});
</script>

<ContinuosProgress {progress} />

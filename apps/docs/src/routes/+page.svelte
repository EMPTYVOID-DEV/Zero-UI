<script>
	import { RegularLoading, SkeletonLoading } from 'zero-ui-registry';
	import Icon from './icon.svelte';
</script>

<div class="main">
	<SkeletonLoading --border-radius="50%" />
</div>

<style>
	:global(body) {
		background-color: rgb(255, 255, 255);
		overflow-x: hidden;
	}
	.main {
		width: 90vw;
		height: 100vh;
	}
</style>

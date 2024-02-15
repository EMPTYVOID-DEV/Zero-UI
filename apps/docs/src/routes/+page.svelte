<script>
	import { Textarea, Toggle } from 'zero-ui-registry';
	import Icon from './icon.svelte';
</script>

<div class="main">
	<Toggle />
	<Textarea --height="300px" label="Enter your name" />
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

<script>
	import { onMount } from 'svelte';
	import { Toggle } from 'zero-ui-registry';
	import Icon from './icon.svelte';
	let progress = 0;
	onMount(() => {
		setInterval(() => {
			progress += 1;
		}, 10);
	});
</script>

<div>
	<Toggle
		state={true}
		on:change={(e) => {
			console.log(e);
		}}
	/>
</div>

<style>
	:global(body) {
		background-color: black;
	}
	div {
		width: 50%;
		display: flex;
		flex-direction: column;
		gap: 20px;
	}
</style>

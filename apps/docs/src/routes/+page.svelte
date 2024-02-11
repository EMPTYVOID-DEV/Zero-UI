<script>
	import { onMount } from 'svelte';
	import { AsyncButton, Input, Toggle } from 'zero-ui-registry';
	import Icon from './icon.svelte';
	let progress = 0;
	onMount(() => {
		setInterval(() => {
			progress += 1;
		}, 10);
	});
</script>

<div>
	<Input
		label="How are you"
		value="no"
		placeholder="lol"
		type="primary"
		inputType="email"
		on:input={(e) => {
			console.log(e);
		}}
	/>
	<AsyncButton type="primary" action={async () => {}} />
</div>

<style>
	:global(body) {
		background-color: white;
	}
	div {
		width: 20%;
		display: flex;
		flex-direction: column;
		gap: 20px;
	}
</style>

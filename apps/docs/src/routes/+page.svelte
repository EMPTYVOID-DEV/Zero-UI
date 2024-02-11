<script>
	import { onMount } from 'svelte';
	import { AsyncButton, Check, Input, Toggle } from 'zero-ui-registry';
	import Icon from './icon.svelte';
	let progress = 0;
	onMount(() => {
		setInterval(() => {
			progress += 1;
		}, 10);
	});
</script>

<div>
	<Input />
	<Check
		label="Password"
		inputType="password"
		checkFunction={(text) => {
			if (text.length == 10) {
				return {
					state: 'valid',
					description: 'Valid format'
				};
			} else {
				return {
					state: 'invalid',
					description:
						'Its should be 10 letter long,Its should be 10 letter long,Its should be 10 letter long'
				};
			}
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

<script>
	import { onMount } from 'svelte';
	import {
		DefaultButton,
		DefaultEntryProgressBar,
		AsyncButton,
		MultiStepEntryProgressBar,
		DefaultChecklist
	} from 'zero-ui-registry';
	import Icon from './icon.svelte';
	let progress = 0;
	onMount(() => {
		setInterval(() => {
			progress += 1;
		}, 10);
	});
</script>

<div>
	<MultiStepEntryProgressBar
		type="primary"
		numberOfSteps={10}
		currentStepName="login"
		stepsPassed={3}
	/>
	<DefaultChecklist checklist={[{ checked: false, text: 'lol', disabled: true }]} />
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

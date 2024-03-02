<script>
	import { fade } from 'svelte/transition';
	import { DefaultDialog as Dialog, SyncButton, DefaultSelect } from 'zero-ui-registry';
	let elements = [
		{
			value: 'svelte',
			label: 'svelte'
		},
		{
			value: 'react',
			label: 'react'
		},
		{
			value: 'vue',
			label: 'vue'
		}
	];
</script>

<Dialog let:close>
	<svelte:fragment slot="trigger" let:open>
		<SyncButton on:click={() => open()} text="open" type="primary" />
	</svelte:fragment>
	<div class="content" transition:fade>
		<h4>Edit your choice</h4>
		<DefaultSelect {elements} value={[{ value: 'svelte', label: 'svelte' }]} />
		<div class="options">
			<SyncButton on:click={() => close()} text="cancel" type="passive" />
			<SyncButton on:click={() => close()} text="confirm" type="primary" />
		</div>
	</div>
</Dialog>

<style>
	.content {
		display: flex;
		flex-direction: column;
		gap: 20px;
		width: 50vw;
		padding: 1.5rem;
		border-radius: var(--border-radius);
		background-color: var(--backgroundColor);
		border: 2px solid var(--primaryColor);
	}

	h4 {
		color: var(--foregroundColor);
	}
	.options {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		align-self: flex-end;
	}
	@media screen and (width<768px) {
		.content {
			width: 90vw;
		}
	}
</style>

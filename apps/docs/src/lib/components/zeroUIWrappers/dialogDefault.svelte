<script>
	import { fade } from 'svelte/transition';
	import { Dialog, SyncButton } from 'zero-ui-registry';
</script>

<Dialog let:close>
	<svelte:fragment slot="trigger" let:open>
		<SyncButton on:click={() => open()} text="open" type="primary" />
	</svelte:fragment>
	<div class="content" transition:fade>
		<h3>This is a Dialog</h3>
		<span>The slot is using svelte transitions</span>
		<SyncButton on:click={() => close()} text="close" type="primary" />
	</div>
</Dialog>

<style>
	.content {
		display: flex;
		flex-direction: column;
		gap: 20px;
		width: 50vh;
		border-radius: var(--border-radius);
		background-color: var(--foregroundColor);
		padding: 0.5rem;
	}
	.content h3 {
		color: var(--backgroundColor);
	}
</style>

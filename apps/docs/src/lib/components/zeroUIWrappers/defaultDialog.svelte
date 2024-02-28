<script>
	import { fade } from 'svelte/transition';
	import { DefaultDialog as Dialog, SyncButton } from 'zero-ui-registry';
</script>

<Dialog let:close>
	<svelte:fragment slot="trigger" let:open>
		<SyncButton on:click={() => open()} text="open" type="primary" />
	</svelte:fragment>
	<div class="content" transition:fade>
		<h4>This Process is irreversible</h4>
		<span>Are you sure you want to continue?</span>
		<div class="options">
			<SyncButton on:click={() => close()} text="cancel" type="passive" />
			<SyncButton on:click={() => close()} text="continue" type="danger" />
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
		border: 2px solid var(--dangerColor);
	}

	h4,
	span {
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

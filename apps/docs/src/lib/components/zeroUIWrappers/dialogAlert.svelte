<script>
	import { SyncButton, DialogAlert } from 'zero-ui-registry';
</script>

<DialogAlert
	type="danger"
	header="Are you sure?"
	description="This action can't be undone.This will permanently erase all of your date be sure to backup your files."
>
	<svelte:fragment slot="alertTrigger" let:open>
		<SyncButton text="Delete" on:click={() => open()} type="danger" />
	</svelte:fragment>
</DialogAlert>

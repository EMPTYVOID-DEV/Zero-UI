<script>
	import DefaultDialog from '../dialog/defaultDialog.svelte';
	import { scale } from 'svelte/transition';
	import { quadInOut } from 'svelte/easing';
	import SyncButton from '../button/syncButton.svelte';

	/**
	 * @typedef {Object} Props
	 * @property {string} header
	 * @property {string} description
	 * @property {"primary"|"danger"} [type]
	 * @property {import('svelte').Snippet<[{open:()=>void}]>} alertTrigger
	 * @property {{cancelLabel:string,confirmLabel:string}} [btnsLabels]
	 * @property {()=>void} [handleCancel]
	 * @property {()=>void} [handleConfirm]
	 */

	/** @type {Props} */
	let {
		header,
		description,
		type = 'primary',
		btnsLabels = {
			cancelLabel: 'cancel',
			confirmLabel: 'confirm'
		},
		handleCancel,
		handleConfirm,
		alertTrigger
	} = $props();
</script>

<DefaultDialog>
	{#snippet trigger({ open })}
		{@render alertTrigger({ open })}
	{/snippet}
	{#snippet children({ close })}
		<div
			class="dialogAlert {type}"
			transition:scale={{
				duration: 400,
				easing: quadInOut,
				start: 0,
				opacity: 0.2
			}}
		>
			<h4 class="header">{header}</h4>
			<span class="description">{description}</span>
			<div class="controls">
				<SyncButton
					text={btnsLabels.cancelLabel}
					type="passive"
					onclick={() => {
						handleCancel?.();
						close();
					}}
				/>
				<SyncButton
					text={btnsLabels.confirmLabel}
					{type}
					onclick={() => {
						handleConfirm?.();
						close();
					}}
				/>
			</div>
		</div>
	{/snippet}
</DefaultDialog>

<style>
	.primary {
		--main-color: var(--primaryColor);
	}
	.danger {
		--main-color: var(--dangerColor);
	}

	.dialogAlert {
		width: 45vw;
		display: flex;
		flex-direction: column;
		background-color: var(--backgroundColor);
		border: 2px solid var(--main-color);
		border-radius: var(--border-radius);
		gap: 0.5rem;
		padding: 0.5rem;
	}
	.dialogAlert .header {
		display: inline-block;
		font-size: var(--h4);
		font-weight: bold;
		font-family: var(--headerFont);
		color: var(--foregroundColor);
	}
	.dialogAlert .description {
		font-size: var(--body);
		font-family: var(--bodyFont);
		color: var(--foregroundColor);
	}
	.controls {
		display: flex;
		align-items: center;
		align-self: flex-end;
		gap: 0.5rem;
	}
	@media screen and (width<768px) {
		.dialogAlert {
			width: 95vw;
		}
	}
</style>

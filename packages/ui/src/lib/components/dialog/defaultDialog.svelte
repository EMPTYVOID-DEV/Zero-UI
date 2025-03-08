<script>
	import { tick } from 'svelte';

	/**
	 * @typedef {Object} Props
	 * @property {import('svelte').Snippet<[{open:()=>void}]>} trigger
	 * @property {import('svelte').Snippet<[{close:()=>void}]>} children The width must be in vw
	 * @property {number} [animationDuration] This is needed to ensure children animation runs properly.
	 */

	/** @type {Props} */
	let { trigger, children, animationDuration = 400 } = $props();

	/**@type {HTMLDialogElement|undefined}*/
	let dialogRef = $state();

	let isOpen = $state(false);

	async function open() {
		dialogRef?.showModal();
		isOpen = true;
	}

	async function close() {
		isOpen = false;
		await tick().then(() => new Promise((res) => setTimeout(() => res(''), animationDuration)));
		dialogRef?.close();
	}
</script>

{@render trigger({ open })}
<dialog
	bind:this={dialogRef}
	onclick={(e) => {
		if (e.target == dialogRef) close();
	}}
>
	{#if isOpen}
		{@render children({ close })}
	{/if}
</dialog>

<style>
	dialog {
		border: 0;
		padding: 0;
		outline: 0;
		box-shadow: none;
		background: none;
		max-width: 100vw;
		max-height: 100vh;
		overflow: visible;
	}

	dialog::backdrop {
		background: rgba(0, 0, 0, 0.3);
		backdrop-filter: blur(0.25rem);
	}
</style>

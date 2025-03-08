<script>
	import LoadingIcon from '../../icons/loadingIcon.svelte';

	/**
	 * @typedef {Object} Props
	 * @property {string}  [text]
	 * @property {import("svelte").Snippet} [icon]
	 * @property {(ev: MouseEvent) => Promise<unknown>} action
	 * @property {"disabled"|"passive"|"primary"|"secondary"|"danger"} [type]
	 * @property {(data:unknown)=>void} [handleResolve]
	 * @property {(error:unknown)=>void} [handleReject]
	 */

	/** @type {Props} */
	let { action, text = 'button', type = 'primary', icon, handleReject, handleResolve } = $props();

	/**@type {"idle"|"loading"}*/
	let state = $state('idle');

	/**
	 * @function handleClick
	 * @param {MouseEvent} event
	 */
	async function handleClick(event) {
		if (state == 'loading') return;
		state = 'loading';
		try {
			const data = await action(event);
			handleResolve?.(data);
		} catch (error) {
			handleReject?.(error);
		} finally {
			state = 'idle';
		}
	}
</script>

<button
	disabled={type == 'disabled'}
	class:loading={state == 'loading'}
	class={type}
	onclick={handleClick}
>
	{#if state == 'loading'}
		<LoadingIcon />
	{:else}
		{@render icon?.()}
	{/if}
	<span>{text}</span>
</button>

<style>
	.disabled {
		--bg: var(--mutedColor);
		cursor: not-allowed;
	}
	.passive {
		--bg: var(--foregroundColor);
	}
	.primary {
		--bg: var(--primaryColor);
	}
	.secondary {
		--bg: var(--secondaryColor);
	}
	.danger {
		--bg: var(--dangerColor);
	}
	button {
		all: unset;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.25rem;
		width: var(--width, fit-content);
		padding-inline: 1rem;
		padding-block: 0.5rem;
		cursor: pointer;
		background-color: var(--bg);
		border-radius: var(--border-radius);
		transition: all 400ms linear;
		--icon: var(--backgroundColor);
	}
	button span {
		text-transform: capitalize;
		color: var(--backgroundColor);
		font-family: var(--bodyFont);
		font-size: var(--body);
		font-weight: bold;
	}
	.loading {
		opacity: 0.8;
		cursor: not-allowed;
	}
</style>

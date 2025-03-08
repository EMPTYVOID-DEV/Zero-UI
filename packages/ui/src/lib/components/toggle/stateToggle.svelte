<script>
	import ValidIcon from '../../icons/validIcon.svelte';
	import CloseIcon from '../../icons/closeIcon.svelte';

	/**
	 * @typedef {Object} Props
	 * @property {boolean} [state]
	 * @property {(newState:boolean)=>void} [handleChange]
	 */

	/** @type {Props} */
	let { state = $bindable(false), handleChange } = $props();

	function toggleState() {
		state = !state;
		handleChange?.(state);
	}
</script>

<button class="toggle" class:active={state} onclick={toggleState}>
	<span class="circle">
		{#if state}
			<ValidIcon />
		{:else}
			<CloseIcon />
		{/if}
	</span>
</button>

<style>
	.toggle {
		all: unset;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		width: 3.5rem;
		aspect-ratio: 2;
		border-radius: 1rem;
		background-color: var(--mutedColor);
		cursor: pointer;
		transition: all 800ms ease;
		--icon: var(--mutedColor);
	}

	.active {
		--icon: var(--primaryColor);
		background-color: var(--primaryColor);
		justify-content: flex-end;
	}

	.circle {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 95%;
		aspect-ratio: 1/1;
		border-radius: 50%;
		background-color: var(--backgroundColor);
	}
</style>

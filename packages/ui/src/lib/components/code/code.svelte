<script>
	import CopyIcon from '../../icons/copyIcon.svelte';
	import DoneIcon from '../../icons/doneIcon.svelte';
	import { githubDark, github } from 'svelte-highlight/styles';
	import { HighlightAuto, LineNumbers } from 'svelte-highlight';

	/**
	 * @typedef {Object} Props
	 * @property {boolean} darkMode
	 * @property {string} code
	 * @property {boolean} singelPage
	 */

	/** @type {Props} */
	let { darkMode, code, singelPage } = $props();

	let copyStatement = $state(false);

	async function copyCode() {
		navigator.clipboard.writeText(code);
		copyStatement = true;
		await new Promise((res) => setTimeout(res, 500));
		copyStatement = false;
	}
</script>

<svelte:head>
	{#if darkMode}
		{@html github}
	{:else}
		{@html githubDark}
	{/if}
</svelte:head>

<div class="code" class:radius={singelPage}>
	{#if copyStatement}
		<span class="control">
			<DoneIcon />
		</span>
	{:else}
		<button class="control" onclick={copyCode}>
			<CopyIcon />
		</button>
	{/if}
	<HighlightAuto {code} let:highlighted>
		<LineNumbers {highlighted} hideBorder />
	</HighlightAuto>
</div>

<style>
	.code {
		overflow: hidden;
		position: relative;
		border-radius: var(--border-radius);
	}
	.code:not(.radius) {
		border-top-left-radius: 0;
	}
	.code :global(> :not(.control)) {
		width: 100%;
		max-height: var(--max-height, 500px);
	}
	.code .control {
		width: fit-content;
		display: flex;
		justify-content: center;
		align-items: center;
		position: absolute;
		background-color: transparent;
		outline: none;
		border: 1px solid var(--primaryColor);
		border-radius: 0.25rem;
		padding: 2px;
		top: clamp(0.75rem, 2%, 1.25rem);
		right: clamp(1rem, 3%, 1.5rem);
		cursor: pointer;
		z-index: 2;
	}

	.code :global(::-webkit-scrollbar) {
		width: 0.5rem;
	}
	.code :global(::-webkit-scrollbar-track) {
		border-radius: 0;
		background: color-mix(in srgb, var(--mutedColor) 40%, transparent 60%);
	}

	.code :global(::-webkit-scrollbar-thumb) {
		border-radius: 0.25rem;
		background: color-mix(in srgb, var(--primaryColor) 60%, transparent 40%);
	}
</style>

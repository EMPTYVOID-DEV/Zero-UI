<script>
	import MoonIcon from '../../icons/moonIcon.svelte';
	import SunIcon from '../../icons/sunIcon.svelte';

	/**
	 * @typedef {"dark" | "light"} Theme
	 */

	/**
	 * @typedef {Object} Props
	 * @property {Theme} [active]
	 * @property {(theme:Theme)=>void} [handleChange]
	 */

	/** @type {Props} */
	let { active = $bindable('dark'), handleChange } = $props();

	/**
	 * @param {Theme} newTheme
	 */
	function toggleTheme(newTheme) {
		active = newTheme;
		handleChange?.(active);
	}
</script>

<button onclick={() => toggleTheme(active === 'dark' ? 'light' : 'dark')}>
	{#if active === 'dark'}
		<MoonIcon />
	{:else}
		<SunIcon />
	{/if}
</button>

<style>
	button {
		all: unset;
		cursor: pointer;
	}
</style>

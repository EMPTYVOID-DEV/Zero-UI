<script>
	import Code from './code.svelte';
	/**
	 * @typedef {Object} Props
	 * @property {string} code
	 * @property {boolean} [darkMode]
	 */

	/** @type {Props} */
	let { code, darkMode = false } = $props();
</script>

<div class="singlePageCode">
	<Code {code} {darkMode} singelPage={true} />
</div>

<style>
	.singlePageCode {
		width: var(--width, 100%);
	}
</style>

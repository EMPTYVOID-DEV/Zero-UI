<script>
	import Code from './code.svelte';
	import PageChanger from './pageChanger.svelte';

	/**
	 * @typedef {Object} Props
	 * @property {{name:string,code:string}[]} [codePages]
	 * @property {boolean} [darkMode]
	 * @property {number} [activePage]
	 */

	/** @type {Props} */
	let { codePages = [], darkMode = false, activePage = $bindable(0) } = $props();
</script>

<div class="multiPageCode">
	<PageChanger pages={codePages.map((el) => el.name)} bind:activePage />
	{#key activePage}
		<div class="page">
			<Code code={codePages[activePage].code} {darkMode} singelPage={false} />
		</div>
	{/key}
</div>

<style>
	.multiPageCode {
		width: var(--width, 100%);
		display: flex;
		flex-direction: column;
	}
</style>

<script>
	import HomeNav from './homeNav.svelte';
	import Menu from '$lib/components/icons/menu.svelte';
	import Close from '$lib/components/icons/close.svelte';
	import { changeTheme, detectSystemTheme } from '$lib/utils/client';
	import { changeMobileStatus, changeMode } from 'sveltedocsmaker/utils';
	let showSections = false;
	/**@param {Event & { detail:{theme:"dark"|"light"|"system"}}} e*/
	function handleThemeChange(e) {
		const theme = e.detail.theme == 'system' ? detectSystemTheme() : e.detail.theme;
		changeTheme(theme);
		changeMode(theme != 'dark');
	}
</script>

<div class="docsNav">
	<HomeNav on:change={handleThemeChange} />
	{#if showSections}
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<span
			class="control"
			on:click={() => {
				showSections = false;
				changeMobileStatus(false);
			}}
		>
			<Close />
		</span>
	{:else}
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<span
			class="control"
			on:click={() => {
				showSections = true;
				changeMobileStatus(true);
			}}
		>
			<Menu />
		</span>
	{/if}
</div>

<style>
	.docsNav {
		width: 100%;
		height: fit-content;
		display: flex;
		align-items: center;
		gap: 12px;
		padding-right: 8px;
	}
	.control {
		display: none;
	}
	.control :global(svg) {
		width: 28px;
		height: 28px;
	}
	@media screen and (width<768px) {
		.control {
			display: flex;
			justify-content: center;
			align-items: center;
		}
	}
</style>

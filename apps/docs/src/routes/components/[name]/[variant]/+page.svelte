<script>
	import { page } from '$app/stores';
	import HomeNav from '$lib/components/core/homeNav.svelte';
	import CoreMd from '$lib/components/md/coreMd.svelte';
</script>

<div class="playGround">
	<HomeNav />
	<div>
		<span class="component">Component:{$page.params.name}</span>
		<span class="variant">Variant:{$page.params.name}</span>
	</div>
	<CoreMd source={$page.data.md} />
	<svelte:component this={$page.data.currentComponent} />
</div>

<style>
	.playGround {
		width: 100vw;
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		gap: 12vh;
		background: radial-gradient(circle at 50% 50%, var(--primaryColor), var(--backgroundColor) 3px);
		background-size: 32px 32px;
		background-repeat: repeat;
		padding-bottom: 80px;
		background-color: var(--backgroundColor);
	}
</style>

<script>
	import { page } from '$app/stores';
	import ComponentIcon from '$lib/components/icons/component.svelte';
	import PuzzleIcon from '$lib/components/icons/puzzle.svelte';
	import HomeNav from '$lib/components/core/homeNav.svelte';
	import { changeTheme } from '$lib/utils/client';
	import { repoLink } from '$lib/utils/const';
	import { capitalize } from '$lib/utils/shared';
	$: exampleLink = `${repoLink}/tree/master/apps/docs/src/lib/components/zeroUIWrappers/${$page.params.variant}${capitalize($page.params.name)}.svelte`;
</script>

<div class="playGround">
	<HomeNav on:change={(e) => changeTheme(e.detail.theme)} />
	<div class="content">
		<section class="header">
			<div>
				<ComponentIcon />
				<h4>Component:{$page.params.name}</h4>
			</div>
			<div>
				<PuzzleIcon />
				<h4>Variant:{$page.params.variant}</h4>
			</div>
		</section>
		<section class="component">
			<svelte:component this={$page.data.currentComponent} />
		</section>
		<h4 class="example">
			You can find a usage example <a target="_blank" href={exampleLink}>here.</a>
		</h4>
	</div>
</div>

<style>
	.playGround {
		width: 100vw;
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 12vh;
		padding-bottom: 3rem;
		background: radial-gradient(circle at 50% 50%, var(--primaryColor), var(--backgroundColor) 3px);
		background-size: 32px 32px;
		background-repeat: repeat;
	}
	.content {
		width: 60%;
		display: flex;
		flex-direction: column;
		gap: 2rem;
	}
	.header {
		display: flex;
		align-items: center;
		gap: 1rem;
		color: var(--foregroundColor);
	}
	.header > div {
		width: 50%;
		display: flex;
		align-items: center;
		gap: 0.25rem;
		padding-inline: 1.25rem;
		padding-block: 0.25rem;
		border: 2px solid var(--primaryColor);
		border-radius: 0.25rem;
	}
	.header > div :global(svg) {
		width: 1.5rem;
		height: 1.5rem;
	}

	.component {
		padding: 1.25rem;
		width: 100%;
		aspect-ratio: 3/1;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: color-mix(in srgb, var(--primaryColor) 4%, transparent 96%);
		border-radius: var(--border-radius);
		border: 1px solid var(--primaryColor);
	}
	.example {
		color: var(--foregroundColor);
	}
	.example a {
		font-size: var(--h4);
		font-family: var(--headerFont);
		font-weight: 600;
		text-decoration: none;
		color: inherit;
	}
	.example a:hover {
		color: var(--primaryColor);
	}
	@media screen and (width<768px) {
		.content {
			width: 90%;
		}
		.header {
			flex-direction: column;
			align-items: flex-start;
		}
		.header div {
			width: 100%;
		}
	}
</style>

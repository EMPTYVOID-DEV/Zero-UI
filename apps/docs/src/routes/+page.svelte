<script>
	import { goto } from '$app/navigation';
	import AccordianWrapper from '$lib/components/zeroUIWrappers/defaultAccordian.svelte';
	import ProgressWrapper from '$lib/components/zeroUIWrappers/continuosProgress.svelte';
	import InputWrapper from '$lib/components/zeroUIWrappers/reactiveInput.svelte';
	import HomeNav from '$lib/components/core/homeNav.svelte';
	import { changeTheme } from '$lib/utils/client';
	import { SyncButton } from 'zero-ui-registry';
	import CodeMultiPage from '$lib/components/zeroUIWrappers/multiPageCode.svelte';

	const pages = [AccordianWrapper, InputWrapper, ProgressWrapper];
	let pageIndex = 0;
</script>

<div class="main">
	<HomeNav on:change={(e) => changeTheme(e.detail.theme)} />
	<section class="info">
		<h1>Zero UI</h1>
		<h4>
			A svelte UI library seamlessly integrating into your project without the need for
			configuration, Just copy and paste code.
		</h4>
		<SyncButton
			text="Getting started"
			type="primary"
			--padding-inline="24px"
			--padding-block="12px"
			on:click={() => goto('/docs/Getting Started/Introduction')}
		/>
	</section>
	<section class="description">
		<div class="leftSide">
			<svelte:component this={pages[pageIndex]} />
		</div>
		<div class="rightSide">
			<CodeMultiPage on:change={(e) => (pageIndex = e.detail.activePageIndex)} />
		</div>
	</section>
</div>

<style>
	.main {
		width: 100vw;
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		gap: 12vh;
		background: radial-gradient(circle at 50% 50%, var(--primaryColor), var(--backgroundColor) 3px);
		background-size: 32px 32px;
		background-repeat: repeat;
		padding-bottom: 3rem;
	}
	.info {
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 20px;
	}
	.info > h1 {
		font-size: var(--huge);
		font-family: var(--zeroFont);
		letter-spacing: 8px;
		color: var(--primaryColor);
	}
	.info h4 {
		width: 50%;
		text-align: center;
		color: var(--foregroundColor);
		font-weight: 500;
	}
	.description {
		width: 100%;
		display: grid;
		grid-template-columns: 45% 45%;
		align-items: center;
		justify-content: center;
		gap: 5%;
		padding-inline: 2.5%;
	}
	.description :is(.leftSide, .rightSide) {
		width: 100%;
	}
	@media screen and (width < 768px) {
		.info h4 {
			width: 95%;
		}
		.description {
			grid-template-columns: 95%;
		}
		.rightSide {
			order: -1;
		}
	}
</style>

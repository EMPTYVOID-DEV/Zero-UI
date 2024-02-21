<script>
	// @ts-nocheck

	import { CheckInput, Dialog, RegularInput, SyncButton } from 'zero-ui-registry';
</script>

<div class="main">
	<Dialog let:close>
		<button
			slot="trigger"
			let:open
			on:click={() => {
				open();
			}}>open</button
		>
		<div class="container">
			<img src="/R.jpeg" alt="lol" />
		</div>
	</Dialog>
</div>

<style>
	:global(body) {
		background-color: white;
		overflow: hidden;
	}

	.main {
		width: 50vw;
		display: flex;
		flex-direction: column;
		gap: 12px;
	}
	.container {
		width: 40vw;
		height: fit-content;
		background-color: white;
		padding: 20px;
		display: flex;
		flex-direction: column;
		gap: 12px;
		border-radius: 0.3rem;
	}
	button {
		width: fit-content;
		padding-inline: 16px;
		padding-block: 8px;
		cursor: pointer;
		outline: none;
		border: none;
		font-size: var(--body);
		font-family: var(--bodyFont);
		font-weight: 600;
		color: var(--backgroundColor);
		background-color: var(--foregroundColor);
		border-radius: var(--border-radius);
	}
</style>

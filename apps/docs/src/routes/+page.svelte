<script>
	// @ts-nocheck

	import { CheckInput, Dialog, RegularInput, SyncButton } from 'zero-ui-registry';
</script>

<div class="main">
	<RegularInput />
	<Dialog let:close>
		<button
			slot="trigger"
			let:open
			on:click={() => {
				open();
			}}>hey</button
		>
		<div class="container">
			<CheckInput
				label="Enter your nationality id"
				inputType="number"
				checkFunction={(val) => {
					if (val.length == 10) {
						return {
							errorMsg: 'lol',
							state: 'valid'
						};
					} else
						return {
							errorMsg: 'You should enter a 10 digit number',
							state: 'invalid'
						};
				}}
			/>
			<CheckInput
				label="Enter your password"
				checkFunction={(val) => {
					const strongPassRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
					if (strongPassRegex.test(val)) {
						return {
							errorMsg: 'lol',
							state: 'valid'
						};
					} else
						return {
							errorMsg: 'Weak password',
							state: 'invalid'
						};
				}}
			/>
			<SyncButton
				on:click={() => {
					close();
				}}
			/>
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
		width: 30vw;
		height: 30vh;
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

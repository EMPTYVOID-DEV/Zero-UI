<script>
	import { CheckInput, Link, Upload } from 'zero-ui-registry';
</script>

<div class="main">
	<Upload
		on:change={(e) => {
			console.log(e.detail);
		}}
	/>
	<Link text="hi" href="/" />
	<CheckInput
		checkFunction={(value) => {
			if (value.length < 10) {
				return {
					state: 'invalid',
					description: 'you should enter a 10 letters word'
				};
			} else {
				return {
					state: 'valid',
					description: 'valid word'
				};
			}
		}}
	/>
</div>

<style>
	:global(body) {
		background-color: rgb(255, 255, 255);
		overflow-x: hidden;
	}
	.main {
		width: 50vw;
		height: 100vh;
		display: flex;
		flex-direction: column;
		gap: 20px;
	}
</style>

<script>
	import { MultiPageCode } from 'zero-ui-registry';
</script>

<div class="main">
	<MultiPageCode
		on:change={(e) => {
			console.log(e.detail);
		}}
		codePages={[
			{
				code: 'lol',
				name: 'aym'
			},
			{
				code: 'ay',
				name: 'lo'
			}
		]}
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

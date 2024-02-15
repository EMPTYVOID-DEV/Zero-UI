<script>
	import { Checklist } from 'zero-ui-registry';
</script>

<div class="main">
	<Checklist
		on:change={(e) => {
			console.log(e.detail);
		}}
		checklist={[
			{
				text: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro quidem sit perferendis nobis mollitia harum! Omnis corporis ullam impedit autem dolorum quia. Voluptas consectetur explicabo labore error hic cupiditate omnis!`,
				checked: false
			},
			{
				text: 'hello',
				checked: false
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
		width: 90vw;
		height: 100vh;
	}
</style>

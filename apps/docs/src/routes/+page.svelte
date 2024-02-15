<script>
	import { DefaultEntryAccordian } from 'zero-ui-registry';
</script>

<div class="main">
	<DefaultEntryAccordian
		accordianList={[
			{
				title: 'what is your dream?, My dream is to work at verecl maintaining svelte-kit',
				description: 'My dream is to work at verecl maintaining svelte-kit'
			},
			{
				title:
					'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate maxime, sint minus similique, modi dicta, ratione distinctio esse aspernatur ipsum obcaecati. Odio inventore consectetur saepe, itaque architecto sapiente dignissimos ea!',
				description: 'My dream is to work at verecl maintaining svelte-kit'
			},
			{
				title: 'lorem',
				description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem iusto vitae repudiandae alias error rem at praesentium beatae eligendi! Quasi aut illo nam, laboriosam quibusdam saepe voluptatibus in beatae enim?
`
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

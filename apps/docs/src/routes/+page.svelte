<script>
	import { SinglePageCode, MultiPageCode, RegularInput, ContinuosProgress } from 'zero-ui-registry';
</script>

<div class="main">
	<ContinuosProgress />
	<RegularInput />
</div>

<style>
	:global(body) {
		background-color: #ffffff;
		overflow-x: hidden;
	}
	.main {
		display: flex;
		flex-direction: column;
		gap: 20px;
		width: 80vw;
		height: 100vh;
	}
</style>

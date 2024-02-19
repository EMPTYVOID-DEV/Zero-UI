<script>
	import { Slider, Upload } from 'zero-ui-registry';
</script>

<div class="main">
	<Upload
		description="You are limited to five files with max size equal to 1mb each."
		numberLimit={5}
	/>
</div>

<style>
	.main {
		width: 50vw;
		height: 1000vh;
		display: flex;
		flex-direction: column;
		gap: 12px;
	}
</style>

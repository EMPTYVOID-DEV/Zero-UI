<script>
	import { fileUpload as FileUpload } from 'zero-ui-registry';
</script>

<div class="main">
	<FileUpload
		on:change={(e) => {
			console.log(e.detail);
		}}
	/>
</div>

<style>
	:global(body) {
		background-color: rgb(0, 0, 0);
		overflow-x: hidden;
	}
	.main {
		width: 60vw;
		height: 100vh;
	}
</style>

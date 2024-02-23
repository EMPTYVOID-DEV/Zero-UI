<script>
	import { ThemeToggle } from 'zero-ui-registry';
</script>

<div class="main">
	<ThemeToggle on:change={(e) => console.log(e.detail)} />
	<h1>ho</h1>
</div>

<style>
	.main {
		width: 50vw;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
</style>

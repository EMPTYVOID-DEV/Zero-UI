<script>
	import { onMount } from 'svelte';
	import { Regular } from 'zero-ui-registry';
	import Skeleton from '../../../../packages/ui/registry/components/loading/skeleton.svelte';
	/**@type {"loading"|"error"|"success"}*/
	let state = 'loading';
	onMount(async () => {
		try {
			state = 'loading';
			await new Promise((res) => setTimeout(res, 4000));
		} catch (error) {
			state = 'error';
		} finally {
			state = 'success';
		}
	});
</script>

<div class="main">
	<Regular {state}>
		<h1 style="color:red;" slot="error">error</h1>
		<h1 style="color:green;" slot="success">success</h1>
	</Regular>
	<Skeleton width="100px" height="50px" radius="8px" />
</div>

<style>
	:global(body) {
		background-color: white;
		overflow-x: hidden;
	}
	.main {
		width: 100vw;
		height: 100vh;
	}
</style>

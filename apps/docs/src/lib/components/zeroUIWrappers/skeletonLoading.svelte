<script>
	import { SkeletonLoading } from 'zero-ui-registry';
</script>

<div class="skeletonLoadingTest">
	<SkeletonLoading --border-radius="50%" />
	<SkeletonLoading --height="2.5rem" --width="90%" --border-radius="8px" />
	<SkeletonLoading --height="2.5rem" --width="90%" --border-radius="8px" />
</div>

<style>
	.skeletonLoadingTest {
		width: 100%;
		display: flex;
		flex-direction: column;
		gap: 10px;
		flex-wrap: wrap;
	}
</style>

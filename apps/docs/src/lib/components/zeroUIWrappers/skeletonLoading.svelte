<script>
	import { SkeletonLoading } from 'zero-ui-registry';
</script>

<div class="skeletonLoadingTest">
	<SkeletonLoading --border-radius="50%" />
	<SkeletonLoading --height="2.5rem" --width="82%" --border-radius="8px" />
	<SkeletonLoading --height="2.5rem" --width="90%" --border-radius="8px" />
	<SkeletonLoading --height="2.5rem" --width="90%" --border-radius="8px" />
</div>

<style>
	.skeletonLoadingTest {
		width: 100%;
		display: flex;
		gap: 10px;
		align-items: center;
		flex-wrap: wrap;
	}
</style>

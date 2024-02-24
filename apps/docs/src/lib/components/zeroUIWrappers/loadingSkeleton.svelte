<script>
	import { SkeletonLoading } from 'zero-ui-registry';
</script>

<div class="skeletonLoadingTest">
	<SkeletonLoading --border-radius="50%" />
	<SkeletonLoading --height="2rem" --width="69%" --border-radius="8px" />
	<SkeletonLoading --height="2rem" --width="90%" --border-radius="8px" />
	<SkeletonLoading --height="2rem" --width="90%" --border-radius="8px" />
</div>

<style>
	.skeletonLoadingTest {
		display: flex;
		gap: 10px;
		align-items: center;
		flex-wrap: wrap;
		width: 18rem;
	}
</style>

<script>
	// @ts-nocheck
	export let href = '';
	export let title = undefined;
</script>

<a class="anchor" {href} {title} target="_blank">
	<slot />
</a>

<style>
	.anchor {
		cursor: pointer;
		color: var(--primaryColor);
		opacity: 0.7;
	}
	.anchor:hover {
		opacity: 1;
	}
</style>

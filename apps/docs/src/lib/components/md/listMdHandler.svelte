<script>
	//@ts-nocheck
	export let ordered;
	export let start;
</script>

{#if ordered}
	<ol {start}><slot /></ol>
{:else}
	<ul><slot /></ul>
{/if}

<style>
	ul,
	ol {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
		color: var(--foregroundColor);
	}
</style>

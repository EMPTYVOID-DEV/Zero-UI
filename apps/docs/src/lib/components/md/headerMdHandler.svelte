<script>
	/**@type {number}*/
	export let depth;
	/**@type {string}*/
	export let raw;
	export let text;
	let id = text
		.toLowerCase()
		.replace(/ /g, '-')
		.replace(/[@#:$%^&,./*_?]/g, '');
</script>

{#if depth === 1}
	<h1 {id} class="header"><slot /></h1>
{:else if depth === 2}
	<h2 {id} class="header"><slot /></h2>
{:else if depth === 3}
	<h3 {id} class="header"><slot /></h3>
{:else if depth === 4}
	<h4 {id} class="header"><slot /></h4>
{:else if depth === 5}
	<h5 {id} class="header"><slot /></h5>
{:else if depth === 6}
	<h6 {id} class="header"><slot /></h6>
{:else}
	{raw}
{/if}

<style>
	.header {
		color: var(--foregroundColor);
	}
</style>

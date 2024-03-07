<script>
	import { filterCategories } from '$lib/utils/client';
	import { DefaultSiteSearch as SiteSearch } from 'zero-ui-registry';
	/**@type {import("zero-ui-registry/types").category[]}*/
	export let categories = [];
	export let placeholder = 'search...';
	let filteredCategories = categories;
</script>

<SiteSearch
	{placeholder}
	categories={filteredCategories}
	on:change={(e) => {
		filteredCategories = filterCategories(e.detail.query, categories);
	}}
/>

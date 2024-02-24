<script>
	import { filterCategories } from '$lib/utils/client';
	import { categories } from '$lib/utils/const';
	import { SiteSearch } from 'zero-ui-registry';

	let filteredCategories = categories;
</script>

<SiteSearch
	showFullMobile={true}
	placeholder="Search For components"
	categories={filteredCategories}
	on:change={(e) => {
		filteredCategories = filterCategories(e.detail.query);
	}}
/>

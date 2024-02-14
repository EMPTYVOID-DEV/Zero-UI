<script>
	import { Pagination } from 'zero-ui-registry';
	import Sync from '../../../../../../packages/ui/registry/components/button/sync.svelte';
	let pages = [
		'/users/1',
		'/users/2',
		'/users/3',
		'/users/4',
		'/users/5',
		'/users/6',
		'/users/7',
		'/users/8',
		'/users/9',
		'/users/10',
		'/users/11',
		'/users/12'
	];
</script>

<Pagination {pages} siblingsCount={1} activePage={1} />

<Sync />

<script>
	import { Pagination } from 'zero-ui-registry';

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

<Pagination {pages} siblingsCount={2} activePage={1} />

<script>
	import { DefaultCheckList as CheckList } from 'zero-ui-registry';
	/**@type {import("zero-ui-registry/types").checkItem[]}*/
	const checkList = [
		{
			text: 'I use svelte',
			checked: true
		},
		{
			text: 'I use react',
			checked: false
		},
		{
			text: 'I use vue',
			checked: false
		}
	];
</script>

<CheckList {checkList} />

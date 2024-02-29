<script>
	import Wrapper from '$lib/components/core/wrapper.svelte';
	import { DefaultCheckList as CheckList, DefaultTabs } from 'zero-ui-registry';
	/**@type {import("zero-ui-registry/types").checkItem[]}*/
	let checkList = [
		{
			text: 'I use svelte',
			checked: true,
			description: 'Because i like the compiler approach.'
		},
		{
			text: 'I use react',
			checked: false,
			description: 'Because i want a job.'
		},
		{
			text: 'I use vue',
			checked: false,
			description: 'I dont know what re you doing'
		}
	];
	const tabs = ['normal', 'disabled'];
</script>

<Wrapper>
	<DefaultTabs
		tabs={tabs.map((el) => ({ title: el }))}
		on:change={(e) => {
			const activeTab = e.detail.activeTab;
			if (activeTab == 1) {
				checkList = checkList.map((el) => ({ ...el, disabled: true }));
			} else {
				checkList = checkList.map((el) => ({ ...el, disabled: false }));
			}
		}}
	/>
	<CheckList {checkList} />
</Wrapper>

<script>
	import { DefaultTabs, DefaultRadioGroup as RadioGroup } from 'zero-ui-registry';
	import Wrapper from '../core/wrapper.svelte';
	const tabs = ['normal', 'disabled'];
	/**@type {import("zero-ui-registry/types").radioItem[]}*/
	let radioGroup = [
		{
			text: 'svelte',
			description: 'Compiler'
		},
		{
			text: 'react',
			description: 'Virtual dom'
		},
		{
			text: 'vue',
			description: 'Virtual dom'
		}
	];
	let activeTab = 0;
</script>

<Wrapper>
	<DefaultTabs bind:activeTab tabs={tabs.map((el) => ({ title: el }))} />
	<RadioGroup {radioGroup} defaultChoice={0} disabled={tabs[activeTab] == 'disabled'} />
</Wrapper>

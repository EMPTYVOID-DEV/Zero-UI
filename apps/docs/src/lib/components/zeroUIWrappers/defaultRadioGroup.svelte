<script>
	import { DefaultRadioGroup as RadioGroup } from 'zero-ui-registry';
	import Wrapper from '../core/wrapper.svelte';
	const tabs = ['normal', 'disabled'];
	/**@type {{ text: string; description?: string }[]}*/
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

<Wrapper bind:activeTab {tabs}>
	<RadioGroup {radioGroup} defaultChoice={0} disabled={tabs[activeTab] == 'disabled'} />
</Wrapper>

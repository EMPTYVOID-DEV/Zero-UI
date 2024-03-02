<script>
	import { DefaultSelect as Select } from 'zero-ui-registry';
	import Wrapper from '../core/wrapper.svelte';
	let elements = [
		{
			value: 'svelte',
			label: 'svelte'
		},
		{
			value: 'react',
			label: 'react'
		},
		{
			value: 'vue',
			label: 'vue'
		}
	];
	/**@type {("normal"|"disabled"|"multi")[]} */
	const tabs = ['disabled', 'normal', 'multi'];
	let activeTab = 0;
</script>

<Wrapper bind:activeTab {tabs}>
	<Select
		disabled={activeTab == 0}
		isMulti={activeTab == 2}
		label="Best framework"
		{elements}
		value={[{ label: 'svelte', value: 'svelte' }]}
	/>
</Wrapper>

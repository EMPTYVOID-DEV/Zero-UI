<script>
	import Wrapper from '$lib/components/core/wrapper.svelte';
	import { InlineAlert } from 'zero-ui-registry';
	/**@type {("primary"|"danger"|"success")[]} */
	const tabs = ['danger', 'primary', 'success'];
	const info = [
		{
			header: 'Error',
			description: 'The fields you inserted are incorrect.'
		},
		{
			header: 'Info',
			description: 'There is a deadline till next week for submitting the application.'
		},
		{
			header: 'Success',
			description: 'The files has been uploaded successfully.'
		}
	];
	let activeTab = 0;
</script>

<Wrapper bind:activeTab {tabs}>
	<InlineAlert
		description={info[activeTab].description}
		header={info[activeTab].header}
		type={tabs[activeTab]}
	/>
</Wrapper>

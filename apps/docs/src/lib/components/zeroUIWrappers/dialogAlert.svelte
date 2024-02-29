<script>
	import { SyncButton, DialogAlert, DefaultTabs } from 'zero-ui-registry';
	import Wrapper from '../core/wrapper.svelte';
	/**@type {("primary"|"danger")[]} */
	const tabs = ['danger', 'primary'];
	const info = [
		{
			trigger: 'delete',
			header: 'Are you sure?',
			description:
				"This action can't be undone.This will permanently erase all of your date be sure to backup your files."
		},
		{
			trigger: 'subscribe',
			header: 'Do you want to subscribe?',
			description:
				'Your trial has expired, in order to continue viewing the content you have to subscribe.'
		}
	];
	let activeTab = 0;
</script>

<Wrapper>
	<DefaultTabs bind:activeTab tabs={tabs.map((el) => ({ title: el }))} />
	<DialogAlert
		type={tabs[activeTab]}
		header={info[activeTab].header}
		description={info[activeTab].description}
	>
		<svelte:fragment slot="alertTrigger" let:open>
			<SyncButton text={info[activeTab].trigger} on:click={() => open()} type={tabs[activeTab]} />
		</svelte:fragment>
	</DialogAlert>
</Wrapper>

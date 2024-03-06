<script>
	// @ts-nocheck
	import { toast, Toaster } from 'svelte-sonner';
	import { SyncButton, SyncToast } from 'zero-ui-registry';
	import Wrapper from '../core/wrapper.svelte';
	/**@type {("primary"|"danger"|"success")[]} */
	const tabs = ['danger', 'primary', 'success'];
	const info = [
		{
			header: 'error',
			description: 'Oops! Something went wrong. The server has crashed.',
			toastAction: {
				action: () => console.log('restart'),
				label: 'restart'
			}
		},
		{
			header: 'info',
			description: 'Just a friendly reminder: The meeting has been scheduled.'
		},
		{
			header: 'success',
			description: 'Great news! The files have been uploaded successfully.'
		}
	];
	let activeTab = 0;
	function showToast() {
		toast.custom(SyncToast, {
			componentProps: {
				header: info[activeTab].header,
				description: info[activeTab].description,
				type: tabs[activeTab],
				toastAction: info[activeTab].toastAction
			}
		});
	}
</script>

<Wrapper bind:activeTab {tabs}>
	<SyncButton type="passive" text="show" on:click={showToast} />
</Wrapper>

<Toaster expand duration={12000} />

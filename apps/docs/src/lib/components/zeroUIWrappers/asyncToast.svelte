<script>
	import { Toaster, toast } from 'svelte-sonner';
	import { AsyncToast, SyncButton } from 'zero-ui-registry';
	import Wrapper from '../core/wrapper.svelte';
	/**@type {("success"|"danger")[]} */
	const tabs = ['danger', 'success'];
	let activeTab = 0;
	function showToast() {
		let promiseState = [
			{
				header: 'Error',
				description: 'The build step has failed',
				toastAction: {
					label: 'restart',
					action: () => console.log('first')
				}
			},
			{
				header: 'Success',
				description: 'The build step was successfull',
				toastAction: null
			}
		];
		toast.custom(AsyncToast, {
			componentProps: {
				loadingState: {
					header: 'Loading',
					description: 'Building the project...',
					toastAction: null
				},
				promise: new Promise((res, rej) =>
					setTimeout(() => {
						if (activeTab == 0) rej(promiseState[0]);
						else res(promiseState[1]);
					}, 3000)
				)
			}
		});
	}
</script>

<Wrapper bind:activeTab {tabs}>
	<SyncButton type="passive" text="show" on:click={showToast} />
</Wrapper>

<Toaster expand duration={4500} />

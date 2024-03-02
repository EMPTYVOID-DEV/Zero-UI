<script>
	import { AsyncButton } from 'zero-ui-registry';
	import Wrapper from '../core/wrapper.svelte';
	/**@type {("disabled"|"passive"|"primary"|"secondary"|"danger")[]} */
	const tabs = ['disabled', 'passive', 'primary', 'secondary', 'danger'];
	let activeTab = 0;
</script>

<Wrapper bind:activeTab {tabs}>
	<AsyncButton action={() => new Promise((res) => setTimeout(res, 3000))} type={tabs[activeTab]} />
</Wrapper>

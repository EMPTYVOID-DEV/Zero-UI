<script>
	import { StaticInput } from 'zero-ui-registry';
	import Wrapper from '../core/wrapper.svelte';
	/**@type {("normal"|"disabled")[]} */
	const tabs = ['disabled', 'normal'];
	let activeTab = 0;
</script>

<Wrapper {tabs} bind:activeTab>
	<StaticInput inputType="password" label="Enter random password" disabled={activeTab == 0} />
</Wrapper>

<script>
	import { DefaultLink as Link } from 'zero-ui-registry';
	import Github from '../icons/github.svelte';
	import Wrapper from '../core/wrapper.svelte';
	/**@type {("primary"|"secondary")[]} */
	const tabs = ['primary', 'secondary'];
	let activeTab = 0;
</script>

<Wrapper bind:activeTab {tabs}>
	<Link
		icon={Github}
		href="https://github.com/EMPTYVOID-DEV/Zero-UI"
		text="Github"
		type={tabs[activeTab]}
	/>
</Wrapper>

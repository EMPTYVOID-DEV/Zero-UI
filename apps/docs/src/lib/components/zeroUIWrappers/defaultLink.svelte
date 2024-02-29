<script>
	import { DefaultTabs, DefaultLink as Link } from 'zero-ui-registry';
	import Github from '../icons/github.svelte';
	import Wrapper from '../core/wrapper.svelte';
	/**@type {("primary"|"secondary")[]} */
	const tabs = ['primary', 'secondary'];
	let activeTab = 0;
</script>

<Wrapper>
	<DefaultTabs tabs={tabs.map((el) => ({ title: el }))} bind:activeTab />
	<Link
		icon={Github}
		href="https://github.com/EMPTYVOID-DEV/Zero-UI"
		text="Github"
		type={tabs[activeTab]}
	/>
</Wrapper>

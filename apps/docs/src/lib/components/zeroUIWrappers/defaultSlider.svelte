<script>
	import { DefaultSlider as Slider } from 'zero-ui-registry';
	import Wrapper from '$lib/components/core/wrapper.svelte';
	/**@type {("normal"|"range")[]} */
	const tabs = ['normal', 'range'];
	let activeTab = 0;
</script>

<Wrapper bind:activeTab {tabs}>
	<Slider range={activeTab == 1} />
</Wrapper>

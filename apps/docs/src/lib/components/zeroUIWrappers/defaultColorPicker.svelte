<script>
	import { DefaultColorPicker as ColorPicker } from 'zero-ui-registry';
	import Wrapper from '../core/wrapper.svelte';
	/**@type {("normal"|"with opacity")[]} */
	const tabs = ['normal', 'with opacity'];
	let activeTab = 0;
</script>

<Wrapper bind:activeTab {tabs}>
	<ColorPicker isAlpha={activeTab == 1} />
</Wrapper>

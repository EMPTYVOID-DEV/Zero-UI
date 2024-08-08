<script>
	import { DefaultOtp } from 'zero-ui-registry';
	import Wrapper from '../core/wrapper.svelte';
</script>

<Wrapper showTabs={false}>
	<DefaultOtp validator={(val) => /^\d$/.test(val)} />
</Wrapper>

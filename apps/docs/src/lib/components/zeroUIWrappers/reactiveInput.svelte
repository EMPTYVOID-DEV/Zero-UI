<script>
	import { ReactiveInput } from 'zero-ui-registry';
	import Wrapper from '../core/wrapper.svelte';
	/**@type {import("zero-ui-registry/types").checkFunction}*/
	function checkFunction(value) {
		const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;
		if (passwordRegex.test(value))
			return {
				errorMsg: '',
				state: 'valid'
			};
		else
			return {
				errorMsg: `Your password must be at least 8 characters long, containing at least one uppercase letter, one lowercase letter, and one digit`,
				state: 'invalid'
			};
	}
	/**@type {("normal"|"disabled")[]} */
	const tabs = ['disabled', 'normal'];
	let activeTab = 0;
</script>

<Wrapper {tabs} bind:activeTab>
	<ReactiveInput
		{checkFunction}
		inputType="password"
		label="Enter random password"
		disabled={activeTab == 0}
	/>
</Wrapper>

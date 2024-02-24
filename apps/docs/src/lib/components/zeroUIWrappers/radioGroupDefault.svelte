<script>
	import { RadioGroup } from 'zero-ui-registry';
	/**@type {import("zero-ui-registry/types").radioItem[]}*/
	let radioGroup = [
		{
			text: 'svelte'
		},
		{
			text: 'react'
		},
		{
			text: 'vue'
		}
	];
</script>

<div class="radioGroupTest">
	<RadioGroup {radioGroup} defaultChoice={0} />
</div>

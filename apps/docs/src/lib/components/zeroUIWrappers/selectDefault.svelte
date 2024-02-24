<script>
	import { Select } from 'zero-ui-registry';
	let elements = [
		{
			value: 'svelte',
			label: 'svelte'
		},
		{
			value: 'react',
			label: 'react'
		},
		{
			value: 'vue',
			label: 'vue'
		}
	];
</script>

<Select label="Best framework" {elements} value={[{ label: 'svelte', value: 'svelte' }]} />

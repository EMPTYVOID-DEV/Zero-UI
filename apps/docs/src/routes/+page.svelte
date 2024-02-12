<script>
	import { Select } from 'zero-ui-registry';
</script>

<div>
	<Select
		on:change={(e) => {
			console.log(e.detail);
		}}
		label="select a name"
		value={[{ value: { name: 'ay', age: 12 }, label: 'aymen' }]}
		elements={[
			{ label: 'aymen name namenamenamenamenamenamenamenamename', value: { name: 'ay', age: 12 } },
			{ label: 'nazim', value: 'nazim' },
			{ label: 'maram', value: 'maram' }
		]}
	/>
	<h1>hi</h1>
</div>

<style>
	:global(body) {
		background-color: white;
	}
	div {
		width: 40%;
		display: flex;
		flex-direction: column;
		gap: 20px;
	}
</style>

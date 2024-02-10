<script>
	import { DefaultEntryAccordian } from 'zero-ui-registry';
</script>

<div>
	<DefaultEntryAccordian
		accordianList={[
			{ title: 'hi', description: 'what the hell' },
			{ title: 'hi', description: 'what the hell' }
		]}
	/>
</div>

<style>
	:global(body) {
		background-color: black;
	}
	div {
		width: 60%;
		display: flex;
		flex-direction: column;
		gap: 20px;
	}
</style>

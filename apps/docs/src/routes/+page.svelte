<script>
	import { Carousel, AsyncButton, DefaultEntryAccordian, DefaultButton } from 'zero-ui-registry';
	import Textarea from '../../../../packages/ui/registry/components/textarea/textarea.svelte';
</script>

<div class="main">
	<DefaultEntryAccordian
		accordianList={[
			{ description: 'hi', title: 'lol' },
			{ description: 'hi', title: 'lol' }
		]}
	/>
</div>

<style>
	:global(body) {
		background-color: white;
		overflow-x: hidden;
	}
	.main {
		width: 60vw;
		height: 100vh;
	}
</style>

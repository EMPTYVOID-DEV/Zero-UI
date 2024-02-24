<script>
	import SvelteMarkdown from 'svelte-markdown';
	import HeaderMdHandler from './headerMdHandler.svelte';
	import LinkMdHandler from './linkMdHandler.svelte';
	import ListMdHandler from './listMdHandler.svelte';
	import ParagraphMdHandler from './paragraphMdHandler.svelte';
	import CodeMdHandler from './codeMdHandler.svelte';
	/**@type {string}*/
	export let source;
</script>

<SvelteMarkdown
	{source}
	renderers={{
		paragraph: ParagraphMdHandler,
		heading: HeaderMdHandler,
		link: LinkMdHandler,
		list: ListMdHandler,
		code: CodeMdHandler
	}}
/>

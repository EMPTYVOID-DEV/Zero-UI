<script>
	import { Accordian } from 'zero-ui-registry';
	/**@type {{title:string,description:string}[]}*/
	let accordianList = [
		{
			title: 'Is it easy to use?',
			description:
				'Designed for easy integration with functional components and a modular structure. Requires no configuration with simple installation using zero-ui-cli.'
		},
		{
			title: 'Why does zero-ui use JSDoc?',
			description:
				'Utilizes JSDoc for comprehensive documentation, ensuring seamless integration whether using TypeScript or not.'
		},
		{
			title: 'Does it respect UI/UX?',
			description:
				'Built with UI/UX guidelines in mind, featuring responsive design and proper color usage for a pleasing user experience.'
		},
		{
			title: 'What are variants?',
			description:
				'Offers different variants for components based on functionality changes. Examples include synchronous and asynchronous button variants.'
		}
	];
</script>

<Accordian {accordianList} />

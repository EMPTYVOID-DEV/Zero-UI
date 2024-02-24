/**@type {import("zero-ui-registry/types").category[]}*/
export const categories = [
	{
		categoryName: 'core',
		sections: [
			{
				link: '/docs/core/introduction',
				sectionName: 'Introduction'
			},
			{
				link: '/docs/core/installation',
				sectionName: 'Installation'
			},
			{
				link: '/docs/core/theme',
				sectionName: 'Theming your components'
			},
			{
				link: '/docs/core/Structure',
				sectionName: 'Structure of components'
			},
			{
				link: '/docs/core/jsdoc',
				sectionName: 'The usage of jsdoc'
			},
			{
				link: '/docs/core/registry',
				sectionName: 'Components registry and cli'
			}
		]
	},
	{
		categoryName: 'components',
		sections: [
			{
				sectionName: 'accordian',
				link: '/docs/components/accordian'
			},
			{
				sectionName: 'button',
				link: '/docs/components/button'
			},
			{
				sectionName: 'checklist',
				link: '/docs/components/checklist'
			},
			{
				sectionName: 'code',
				link: '/docs/components/code'
			},
			{
				sectionName: 'colorPicker',
				link: '/docs/components/colorPicker'
			},
			{
				sectionName: 'upload',
				link: '/docs/components/upload'
			},
			{
				sectionName: 'input',
				link: '/docs/components/input'
			},
			{
				sectionName: 'link',
				link: '/docs/components/link'
			},
			{
				sectionName: 'loading',
				link: '/docs/components/loading'
			},
			{
				sectionName: 'pagination',
				link: '/docs/components/pagination'
			},
			{
				sectionName: 'progress',
				link: '/docs/components/progress'
			},
			{
				sectionName: 'radioGroup',
				link: '/docs/components/radioGroup'
			},
			{
				sectionName: 'select',
				link: '/docs/components/select'
			},
			{
				sectionName: 'slider',
				link: '/docs/components/slider'
			},
			{
				sectionName: 'textarea',
				link: '/docs/components/textarea'
			},
			{
				sectionName: 'toggle',
				link: '/docs/components/toggle'
			},
			{
				sectionName: 'dialog',
				link: '/docs/components/dialog'
			},
			{
				sectionName: 'search',
				link: '/docs/components/search'
			}
		]
	}
];

/**
 * @type {{name:string,code:string}[]}
 */

export const codePages = [
	{
		name: 'accordian',
		code: `
<script>
  import { Accordian } from 'zero-ui-registry';
  /**@type {{title:string,description:string}[]}*/
  let accordianList = [...];
</script>

<Accordian {accordianList} />
		`
	},
	{
		name: 'input',
		code: `
<script>
	import { CheckInput } from 'zero-ui-registry';
	/**@type {import("zero-ui-registry/types").checkFunction}*/
	function checkFunction(value) {
		const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[A-Za-z\\d@$!%*?&]{8,}$/;
		if (passwordRegex.test(value))
			return {
				errorMsg: '',
				state: 'valid'
			};
		else
			return {
				errorMsg: 'Your password must be 8-16 characters, include at least one letter and one digit, and may use special characters',
				state: 'invalid'
			};
	}
</script>

<CheckInput {checkFunction} inputType="password" />
		`
	},
	{
		name: 'progress',
		code: `
<script>
	import { onMount } from 'svelte';
	import { ContinuosProgress } from 'zero-ui-registry';
	let progress = 0;
	onMount(() => {
		const intervalId = setInterval(() => {
			progress++;
			if (progress == 100) clearInterval(intervalId);
		}, 100);
	});
</script>

<ContinuosProgress {progress} />
		`
	}
];

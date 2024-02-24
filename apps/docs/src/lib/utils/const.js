/**@type {import("zero-ui-registry/types").category[]}*/
export const categories = [
	{
		categoryName: 'components',
		sections: [
			{
				sectionName: 'accordion',
				link: '/components/accordian/default'
			},
			{
				sectionName: 'button',
				link: '/components/button/sync',
				subSections: [
					{
						link: '/components/button/sync',
						subSectionName: 'synchronous button'
					},
					{
						link: '/components/button/async',
						subSectionName: 'asynchronous button'
					}
				]
			},
			{
				sectionName: 'checkList',
				link: '/components/checkList/default'
			},
			{
				sectionName: 'code',
				link: '/components/code/singlePage',
				subSections: [
					{
						link: '/components/code/singlePage',
						subSectionName: 'single page code'
					},
					{
						link: '/components/code/multiPage',
						subSectionName: 'multi page code'
					}
				]
			},
			{
				sectionName: 'colorPicker',
				link: '/components/colorPicker/default'
			},
			{
				sectionName: 'dialog',
				link: '/components/dialog/default'
			},
			{
				sectionName: 'input',
				link: '/components/input/regular',
				subSections: [
					{
						link: '/components/input/regular',
						subSectionName: 'regular input'
					},
					{
						link: '/components/input/check',
						subSectionName: 'check input'
					}
				]
			},
			{
				sectionName: 'link',
				link: '/components/link/default'
			},
			{
				sectionName: 'loading',
				link: '/components/loading/regular',
				subSections: [
					{
						link: '/components/loading/regular',
						subSectionName: 'regular loading'
					},
					{
						link: '/components/loading/skeleton',
						subSectionName: 'skeleton loading'
					}
				]
			},
			{
				sectionName: 'pagination',
				link: '/components/pagination/default'
			},
			{
				sectionName: 'progress',
				link: '/components/progress/continuos',
				subSections: [
					{
						link: '/components/progress/continuos',
						subSectionName: 'continuos progress bar'
					},
					{
						link: '/components/progress/multiStep',
						subSectionName: 'multiStep progress bar'
					}
				]
			},
			{
				sectionName: 'radioGroup',
				link: '/components/radioGroup/default'
			},
			{
				sectionName: 'search',
				link: '/components/search/default'
			},
			{
				sectionName: 'select',
				link: '/components/select/default'
			},
			{
				sectionName: 'slider',
				link: '/components/slider/default'
			},
			{
				sectionName: 'textarea',
				link: '/components/textarea/default'
			},
			{
				sectionName: 'toggle',
				link: '/components/toggle/state',
				subSections: [
					{
						link: '/components/toggle/state',
						subSectionName: 'state toggle'
					},
					{
						link: '/components/toggle/theme',
						subSectionName: 'theme toggle'
					}
				]
			},
			{
				sectionName: 'upload',
				link: '/components/upload/default'
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

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
		// check the password
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

export const repoLink = 'https://github.com/EMPTYVOID-DEV/Zero-UI';

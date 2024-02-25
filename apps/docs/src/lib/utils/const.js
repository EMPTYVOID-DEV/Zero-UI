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

export const cookieMaxAge = 3600 * 24 * 7;

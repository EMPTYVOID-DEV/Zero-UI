/** @type {import('./$types').PageLoad} */
// @ts-ignore
export const load = async ({ params, data }) => {
	const currentComponent = (
		await import(
			`../../../../lib/components/zeroUIWrappers/${params.name}${capitalize(params.variant)}.svelte`
		)
	).default;
	return {
		currentComponent,
		// @ts-ignore
		md: data.md
	};
};

/**@param {string} word*/
function capitalize(word) {
	return word[0].toUpperCase() + word.slice(1);
}

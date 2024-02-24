// export const prerender = true;

/** @type {import('./$types').PageLoad} */

// @ts-ignore
export const load = async ({ params }) => {
	const path = `../../../../lib/components/zeroUIWrappers/${params.name}${capitalize(params.variant)}.svelte`;
	const currentComponent = (await import(path)).default;
	return {
		currentComponent
	};
};

/**@param {string} word*/
function capitalize(word) {
	return word[0].toUpperCase() + word.slice(1);
}

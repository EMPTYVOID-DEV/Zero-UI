import { capitalize } from '$lib/utils/server';

/** @type {import('./$types').PageLoad} */
// @ts-ignore
export const load = async ({ params, data }) => {
	const currentComponent = (
		await import(
			`../../../../lib/components/zeroUIWrappers/${params.variant}${capitalize(params.name)}.svelte`
		)
	).default;
	return {
		currentComponent,
		// @ts-ignore
		md: data.md
	};
};

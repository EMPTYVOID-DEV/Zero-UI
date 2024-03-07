import { capitalize } from '$lib/utils/shared';

/** @type {import('./$types').PageLoad} */
// @ts-ignore
export const load = async ({ params }) => {
	const currentComponent = (
		await import(
			`../../../../lib/components/zeroUIWrappers/${params.variant}${capitalize(params.name)}.svelte`
		)
	).default;
	return {
		currentComponent
	};
};

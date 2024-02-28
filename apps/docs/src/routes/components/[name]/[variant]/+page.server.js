import { githubFetch } from '$lib/utils/server';
import { capitalize } from '$lib/utils/server';

/** @type {import('./$types').PageLoad} */
// @ts-ignore
export const load = async ({ params }) => {
	const url = `https://raw.githubusercontent.com/EMPTYVOID-DEV/Zero-UI/master/md/${params.variant}${capitalize(params.name)}.md`;
	const content = await githubFetch(url);
	return {
		md:
			content ||
			'### The documentation for this component is still pending and has not been written yet'
	};
};

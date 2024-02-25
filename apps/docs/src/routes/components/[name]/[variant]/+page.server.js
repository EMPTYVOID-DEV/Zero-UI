import { githubFetch } from '$lib/utils/server';

/** @type {import('./$types').PageLoad} */
// @ts-ignore
export const load = async ({ params }) => {
	const url = `https://raw.githubusercontent.com/EMPTYVOID-DEV/Zero-UI/master/md/${params.name}/${params.variant}.md`;
	const content = await githubFetch(url);
	return {
		md: content || '### TODO'
	};
};

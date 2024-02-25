import { getSearchContent, githubFetch } from '$lib/utils/server';

export const prerender = true;

export const load = async () => {
	const registry = await githubFetch(
		'https://raw.githubusercontent.com/EMPTYVOID-DEV/Zero-UI/master/packages/ui/registry.json'
	);
	/**@type {import("../app.js").registryType} */
	const registryJson = JSON.parse(registry || '{}');
	const searchContent = getSearchContent(registryJson);
	return {
		searchContent
	};
};

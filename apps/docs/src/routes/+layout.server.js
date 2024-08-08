import fs from 'fs/promises';
import { getSearchContent } from '$lib/utils/server';

export const prerender = true;

export const load = async () => {
	const registry = (
		await fs.readFile('/home/aymen_keskas/Documents/projects/zero-ui/packages/ui/registry.json')
	).toString();
	/**@type {import("../app.js").registryType} */
	const registryJson = JSON.parse(registry || '{}');
	const searchContent = getSearchContent(registryJson);
	return {
		searchContent
	};
};

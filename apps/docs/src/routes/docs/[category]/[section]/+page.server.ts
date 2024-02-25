import { readMd } from 'sveltedocsmaker/utils';
import { error } from '@sveltejs/kit';

export const prerender = true;

/**@type {import("@sveltejs/kit").Load}*/
export const load = async ({ params }) => {
	const [data, err] = await readMd(params.section, params.category);

	if (err) {
		throw error(404, 'The requested route does not exist');
	}

	return data;
};

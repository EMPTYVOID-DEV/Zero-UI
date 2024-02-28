import { readMd } from 'sveltedocsmaker/utils';
import { error } from '@sveltejs/kit';

export const prerender = true;

export async function load(/**@type { import('@sveltejs/kit').LoadEvent}*/ event) {
	const [data, err] = await readMd(event.params.section, event.params.category);

	if (err) {
		throw error(404, 'The requested route does not exist');
	}

	return data;
}

import { error } from '@sveltejs/kit';
/**
 * @param {string} url
 */
export async function githubFetch(url) {
	try {
		const response = await fetch(url);
		if (!response.ok) {
			// @ts-ignore
			throw new Error('error occured', {
				cause: {
					res: response
				}
			});
		}
		const content = await response.text();
		return content;
	} catch (/**@type {any}*/ e) {
		if (!e.cause?.res) {
			error(400, 'bad Request');
		}
		const { status } = e.cause.res;
		switch (status) {
			case 429:
				error(429, 'Github requests limit');
				break;
			case 403:
				error(403, 'Github requests limit');
				break;
			case 404:
				error(404, 'Not found');
				break;
			default:
				error(500, 'Unknown Error');
				break;
		}
	}
}

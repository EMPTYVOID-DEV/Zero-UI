/**
 * @param {string} url
 * @returns {Promise<string|null>}
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
		return null;
	}
}

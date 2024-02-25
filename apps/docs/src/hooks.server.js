import { cookieMaxAge } from '$lib/utils/const';

/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
	const response = await resolve(event, {
		transformPageChunk: ({ html }) => {
			let currentTheme = event.cookies.get('theme');
			if (!currentTheme) {
				currentTheme = 'dark';
				event.cookies.set('theme', currentTheme, {
					path: '/',
					httpOnly: false,
					maxAge: cookieMaxAge
				});
			}
			return html.replace('data-theme=""', `data-theme="${currentTheme}"`);
		}
	});
	return response;
}

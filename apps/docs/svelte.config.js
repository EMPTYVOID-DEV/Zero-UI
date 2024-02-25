import adapter from '@sveltejs/adapter-auto';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		prerender: {
			entries: [
				'/docs/Getting Started/Introduction',
				'/docs/Getting Started/Installation',
				'/docs/Getting Started/Theming',
				'/docs/Getting Started/Components',
				'/docs/Getting Started/Jsdoc',
				'/docs/Getting Started/Cli',
				'/components/accordian/default',
				'/components/button/sync',
				'/components/button/async',
				'/components/checkList/default',
				'/components/code/singlePage',
				'/components/code/multiPage',
				'/components/colorPicker/default',
				'/components/dialog/default',
				'/components/input/regular',
				'/components/input/check',
				'/components/link/default',
				'/components/loading/regular',
				'/components/loading/skeleton',
				'/components/pagination/default',
				'/components/progress/continuos',
				'/components/progress/multiStep',
				'/components/radioGroup/default',
				'/components/search/default',
				'/components/select/default',
				'/components/slider/default',
				'/components/textarea/default',
				'/components/toggle/state',
				'/components/toggle/theme',
				'/components/upload/default'
			]
		}
	}
};

export default config;

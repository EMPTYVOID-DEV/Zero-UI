import adapter from '@sveltejs/adapter-vercel';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			runtime: 'nodejs18.x'
		}),
		prerender: {
			entries: [
				'/docs/Getting Started/Introduction',
				'/docs/Getting Started/Installation',
				'/docs/Getting Started/Theming',
				'/docs/Getting Started/Components',
				'/docs/Getting Started/Jsdoc',
				'/docs/Getting Started/Registry.json',
				'/docs/Getting Started/Folder structure',
				'/components/accordian/default',
				'/components/alert/inline',
				'/components/alert/dialog',
				'/components/button/sync',
				'/components/button/async',
				'/components/checkList/default',
				'/components/code/singlePage',
				'/components/code/multiPage',
				'/components/colorPicker/default',
				'/components/dialog/default',
				'/components/input/static',
				'/components/input/reactive',
				'/components/link/default',
				'/components/loading/regular',
				'/components/loading/skeleton',
				'/components/pagination/default',
				'/components/progress/continuos',
				'/components/progress/multiStep',
				'/components/radioGroup/default',
				'/components/siteSearch/default',
				'/components/select/default',
				'/components/slider/default',
				'/components/textarea/default',
				'/components/tabs/default',
				'/components/toggle/state',
				'/components/toggle/theme',
				'/components/toast/sync',
				'/components/toast/async',
				'/components/upload/default'
			]
		},
		outDir: 'build'
	}
};

export default config;

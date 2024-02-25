import dynamicImportVars from '@rollup/plugin-dynamic-import-vars';

export default {
	plugins: [
		dynamicImportVars({
			include: ['./src/lib/*']
		})
	]
};

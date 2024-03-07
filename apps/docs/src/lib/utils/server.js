import { capitalize } from './shared.js';

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

/**
 * @param {import("../../app.d.ts").registryType} registry
 * @returns {import("zero-ui-registry/types").category[]}
 * */
export function getSearchContent(registry) {
	/**@type {import("zero-ui-registry/types").category} */
	const searchContent = {
		categoryName: 'components',
		sections: []
	};
	for (let component in registry) {
		const variants = Object.keys(registry[component]);
		/**@type {import("zero-ui-registry/types").section} */
		const searchEntry = {
			link: `/components/${component}/${variants[0]}`,
			sectionName: component
		};
		if (variants.length > 1) {
			searchEntry.subSections = [];
			for (let variant of variants) {
				searchEntry.subSections.push({
					link: `/components/${component}/${variant}`,
					subSectionName: `${variant} ${component}`
				});
			}
		}
		searchContent.sections.push(searchEntry);
	}
	orderSearchResults([searchContent]);
	return addDocsLinks([searchContent]);
}

/**
 * @param {import("zero-ui-registry/types").category[]} categories
 * @returns {import("zero-ui-registry/types").category[]}
 */
function orderSearchResults(categories) {
	categories.sort((a, b) => a.categoryName.localeCompare(b.categoryName));
	categories.forEach((category) => {
		category.sections.sort((a, b) => a.sectionName.localeCompare(b.sectionName));
		category.sections.forEach((section) => {
			if (section.subSections) {
				section.subSections.sort((a, b) => a.subSectionName.localeCompare(b.subSectionName));
			}
		});
	});

	return categories;
}

/**
 * @param {import("zero-ui-registry/types").category[]} searchContent
 * @returns {import("zero-ui-registry/types").category[]}
 */
export function addDocsLinks(searchContent) {
	const docsSections = [
		'introduction',
		'installation',
		'folder structure',
		'components',
		'theming',
		'jsdoc',
		'registry.json'
	];
	/**@type {import("zero-ui-registry/types").category} */
	const docsCategory = {
		categoryName: 'Getting started',
		sections: []
	};
	docsSections.forEach((section) => {
		const capitalizedSection = capitalize(section);
		docsCategory.sections.push({
			link: `/docs/Getting Started/${capitalizedSection}`,
			sectionName: capitalizedSection
		});
	});
	searchContent.unshift(docsCategory);
	return searchContent;
}

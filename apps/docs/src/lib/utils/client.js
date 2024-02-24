import { categories } from './const';

/**
 *@function changeTheme will persist the the theme to local storage and set css variables
 *@param {"dark"|"light"|"system"} theme
 */
export function changeTheme(theme) {
	console.log(theme);
	const actualTheme = theme == 'system' ? detectSystemTheme() : theme;
	window.localStorage.setItem('theme', actualTheme);
	const body = document.querySelector('body');
	if (actualTheme == 'dark') {
		body?.classList.remove('light');
		body?.classList.add('dark');
	} else {
		body?.classList.remove('dark');
		body?.classList.add('light');
	}
}

/**
 * @function detectSystemTheme will extract the user's system theme
 * @return {"light"|"dark"}
 */
export function detectSystemTheme() {
	const darkModePreference = window.matchMedia('(prefers-color-scheme: dark)');
	if (darkModePreference.matches) return 'dark';
	else return 'light';
}

/**
 * @function filterSearch will filter the categories accordian to user search query
 * @param {string} query
 * @return {import("zero-ui-registry/types").category[]}
 */
export function filterCategories(query) {
	/**@type {import("zero-ui-registry/types").category[]}*/
	const queryResult = [];
	const coreSections = categories
		.find((el) => el.categoryName == 'core')
		?.sections.filter((el) => doesItInclude(el.sectionName, query));
	const components = categories
		.find((el) => el.categoryName == 'components')
		?.sections.filter((el) => doesItInclude(el.sectionName, query));
	if (coreSections && coreSections.length != 0)
		queryResult.push({ categoryName: 'core', sections: coreSections });
	if (components && components.length != 0)
		queryResult.push({ categoryName: 'components', sections: components });
	return queryResult;
}

/**
 * @param {string} str
 * @param {string} subStr
 * @return {boolean}
 * */
function doesItInclude(str, subStr) {
	const strLowerCase = str.toLowerCase();
	const subStrLowerCase = subStr.toLowerCase();
	return strLowerCase.includes(subStrLowerCase);
}

import { cookieMaxAge } from './const';

/**
 *@function changeTheme will persist the the theme to local storage and set css variables
 *@param {"dark"|"light"|"system"} theme
 */
export function changeTheme(theme) {
	const actualTheme = theme == 'system' ? detectSystemTheme() : theme;
	createCookie('theme', actualTheme, cookieMaxAge);
	const html = document.querySelector('html');
	const dataset = html?.dataset;
	if (dataset) dataset.theme = actualTheme;
}

/**
 * @param {string} name
 * @param {string} value
 * @param {number} maxAge
 */
function createCookie(name, value, maxAge) {
	const date = new Date();
	const expirationDate = date.getTime() + maxAge * 1000;
	date.setTime(expirationDate);
	document.cookie = `${name}=${value};expires=${date.toUTCString()};path=/`;
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
 * @param {import('zero-ui-registry/types').category[]} categories
 * @return {import("zero-ui-registry/types").category[]}
 */
export function filterCategories(query, categories) {
	/**@type {import("zero-ui-registry/types").category[]}*/
	const queryResult = [];
	const components = categories
		.find((el) => el.categoryName == 'components')
		?.sections.filter((el) => doesItInclude(el.sectionName, query));
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

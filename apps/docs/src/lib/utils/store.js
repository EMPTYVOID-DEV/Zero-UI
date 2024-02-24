import { writable } from 'svelte/store';

/**@type {import("svelte/store").Writable<"light"|"dark">} */
export const themeStore = writable('light');

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};

export type variant = {
	files: string[];
	packages?: string[];
	icons?: string[];
	variants?: string[];
};

export type registryType = {
	[component: string]: {
		[otherVariant: string]: variant;
	};
};

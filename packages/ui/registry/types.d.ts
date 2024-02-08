import { ComponentType, SvelteComponent } from "svelte";

export type iconComponent = ComponentType<SvelteComponent>;

export type checklist = { text: string; checked: boolean }[];

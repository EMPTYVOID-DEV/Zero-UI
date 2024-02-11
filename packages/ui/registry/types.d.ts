import { ComponentType, SvelteComponent } from "svelte";

// general type for a an icon component
export type iconComponent = ComponentType<SvelteComponent>;

// a type for the checklist component prop
export type checklist = {
  text: string;
  checked: boolean;
  disabled: boolean;
  name?: string;
  value?: string;
}[];

export type radioGroup = {
  items: {
    text: string;
    name?: string;
    value?: string;
  }[];
  defaultChoice?: number;
  disabled: boolean;
};

// type for the asyncButton action prop
export type asyncButtonAction = (ev: MouseEvent) => Promise<any>;

export type inputChangeHandler = (
  ev: Event & {
    currentTarget: EventTarget & HTMLInputElement;
  }
) => void;

import { ComponentType, SvelteComponent } from "svelte";

// general type for a an icon component
export type iconComponent = ComponentType<SvelteComponent>;

// type for the asyncButton action prop
export type asyncButtonAction = (ev: MouseEvent) => Promise<any>;

//type for input change event
export type inputChangeHandler = (
  ev: Event & {
    currentTarget: EventTarget & HTMLInputElement;
  }
) => void;

// event type for the change handler fired by slider package which contains a detail tuple  with range
export type sliderEvent = (
  ev: Event & {
    currentTarget: EventTarget & HTMLInputElement;
  } & {
    detail: [number, number];
  }
) => void;

// type for the select change event

export type selectEvent = Event & {
  detail:
    | { value: any; label: string }[]
    | { value: any; label: string }
    | null;
};

// This is for the check variant input component
export type checkFunction = (currentValue: string) => {
  state: "valid" | "invalid";
  description: string;
};

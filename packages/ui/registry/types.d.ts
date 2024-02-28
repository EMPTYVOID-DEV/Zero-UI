import { ComponentType, EventDispatcher, SvelteComponent } from "svelte";

// general type for a an icon component
export type iconComponent = ComponentType<SvelteComponent>;

// type for the asyncButton action prop
export type asyncButtonAction = (ev: MouseEvent) => Promise<any>;

// type for default checklist component
export type checkItem = {
  text: string;
  checked: boolean;
  disabled?: boolean;
  name?: string;
  value?: string;
};

// type for default radioGroup component
export type radioItem = { text: string; name?: string; value?: string };

// type for the change event
export type changeEvent<T> = Event & {
  currentTarget: EventTarget & T;
};

//type for input change event
export type inputChangeHandler<T> = (ev: changeEvent<T>) => void;

// event type for the change handler fired by slider package which contains a detail tuple  with range
export type sliderEvent = (
  ev: Event & {
    currentTarget: EventTarget & HTMLInputElement;
  } & {
    detail: [number, number];
  }
) => void;

// type for the default select change event

export type selectEvent = Event & {
  detail:
    | { value: any; label: string }[]
    | { value: any; label: string }
    | null;
};

// This is for the reactive variant input component
export type checkFunction = (currentValue: string) => {
  state: "valid" | "invalid";
  errorMsg: string;
};

// this type is for a search section
export type section = {
  link: string;
  sectionName: string;
  subSections?: {
    subSectionName: string;
    link: string;
    isHeader?: boolean;
  }[];
};

// this type is for search category.
export type category = {
  categoryName: string;
  sections: section[];
};

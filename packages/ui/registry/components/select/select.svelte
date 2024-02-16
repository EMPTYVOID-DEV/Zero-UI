<script>
  import { createEventDispatcher } from "svelte";
  import Select from "svelte-select";

  /** @type {string}*/
  export let placeholder = "";
  /** @type {string}*/
  export let label = "";
  /** @type {{value:any,label:string}[]}*/
  export let elements = [];
  /** @type {{value:any,label:string}[]}*/
  export let value = [];
  /**@type {boolean}*/
  export let disabled = false;
  /**@type {string}*/
  export let name = "";
  /**@type {boolean}*/
  export let isMulti = false;
  const dispatcher = createEventDispatcher();
  const processedValue = isMulti ? value : value[0];

  /**
   * @param {import("../../types").selectEvent} e
   * The event wont contain detail object if no elements were selected
   * Detail will be an array in case isMulti is set , single value otherwise
   * But the change event detail will always fire with an array
   */
  function handleChange(e) {
    if (!e.detail) {
      dispatcher("change", {
        selected: [],
      });
      return;
    }
    if (isMulti) {
      dispatcher("change", {
        selected: e.detail,
      });
    } else {
      dispatcher("change", {
        selected: [e.detail],
      });
    }
  }
</script>

<div class="select">
  <label for={name}>
    {label}
  </label>
  <Select
    searchable
    value={processedValue}
    multiple={isMulti}
    items={elements}
    showChevron={!disabled}
    hideEmptyState={true}
    clearable={true}
    {name}
    {placeholder}
    {disabled}
    on:input={handleChange}
    --chevron-color="var(--primaryColor)"
    --clear-icon-color="var(--primaryColor)"
    --background="transparent"
    --placeholder-color="var(--foregroundColor)"
    --input-color="var(--foregroundColor)"
    --list-background="var(--backgroundColor)"
    --list-border="1px solid var(--primaryColor)"
    --list-border-radius="var(--border-radius)"
    --selected-item-color="var(--foregroundColor)"
    --multi-item-bg="var(--backgroundColor)"
    --multi-item-color="var(--foregroundColor)"
    --multi-item-border-radius="var(--border-radius)"
    --item-color="var(--foregroundColor)"
    --item-first-border-radius="0"
    --item-hover-bg="color-mix(in srgb , var(--primaryColor) 40%, transparent 60%)"
    --item-hover-color="var(--foregroundColor)"
    --item-is-active-color="var(--foregroundColor)"
    --item-is-active-bg="var(--primaryColor)"
    --border="2px solid var(--foregroundColor)"
    --border-focused="2px solid var(--primaryColor)"
    --border-hover="2px solid var(--foregroundColor)"
    --disabled-color="var(--mutedColor)"
    --disabled-border-color="var(--mutedColor)"
    --list-z-index="999"
  ></Select>
</div>

<style>
  .select {
    display: flex;
    flex-direction: column;
    gap: var(--gap);
  }

  .select label {
    font-family: var(--headerFont);
    font-size: var(--body);
    font-weight: 500;
    color: var(--foregroundColor);
    text-transform: capitalize;
  }
</style>

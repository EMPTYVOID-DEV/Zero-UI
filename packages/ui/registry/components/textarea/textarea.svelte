<script>
  import { createEventDispatcher } from "svelte";

  /**@type {string}*/
  export let name = "";
  /**@type {string}*/
  export let value = "";
  /**@type {boolean}*/
  export let disabled = false;
  /**@type {string}*/
  export let label = "";

  const dispatcher = createEventDispatcher();

  /**@type {import("../../types").inputChangeHandler<HTMLTextAreaElement>}*/
  function handleChange(e) {
    dispatcher("change", {
      query: e.currentTarget.value,
    });
  }
</script>

<div class="textarea">
  <label for="texarea">{label}</label>
  <textarea id="texarea" {disabled} {value} {name} on:input={handleChange} />
</div>

<style>
  .textarea {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  .textarea label {
    font-family: var(--headerFont);
    font-size: var(--body);
    font-weight: 600;
    color: var(--foregroundColor);
  }
  .textarea label:empty {
    display: none;
  }
  .textarea textarea {
    outline: none;
    resize: none;
    width: var(--width, 100%);
    height: var(--height, 400px);
    padding-left: 8px;
    overflow: auto;
    border: 2px solid var(--foregroundColor);
    color: var(--foregroundColor);
    font-family: var(--headerFont);
    font-size: var(--body);
    border-radius: var(--border-radius);
  }
  .textarea textarea:focus {
    border-color: var(--primaryColor);
  }
  .textarea :global(::-webkit-scrollbar) {
    width: 0.5rem;
  }
  .textarea :global(::-webkit-scrollbar-track) {
    border-radius: 0;
    background: color-mix(in srgb, var(--foregroundColor) 40%, transparent 60%);
  }

  .textarea :global(::-webkit-scrollbar-thumb) {
    border-radius: 4px;
    background: color-mix(in srgb, var(--primaryColor) 60%, transparent 40%);
  }
</style>

<script>
  import { createEventDispatcher } from "svelte";

  
  
  
  
  /**
   * @typedef {Object} Props
   * @property {string} [name]
   * @property {string} [value]
   * @property {boolean} [disabled]
   * @property {string} [label]
   */

  /** @type {Props} */
  let {
    name = "",
    value = "",
    disabled = false,
    label = ""
  } = $props();

  const dispatcher = createEventDispatcher();

  /**@type {import("../../types").inputChangeHandler<HTMLTextAreaElement>}*/
  function handleChange(e) {
    dispatcher("change", {
      value: e.currentTarget.value,
    });
  }
</script>

<div class="textarea">
  <label for="texarea">{label}</label>
  <textarea id="texarea" {disabled} {value} {name} oninput={handleChange}></textarea>
</div>

<style>
  .textarea {
    width: var(--width, 100%);
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
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
    width: 100%;
    height: var(--height, 400px);
    padding-left: 0.5rem;
    overflow: auto;
    background-color: transparent;
    border: 2px solid var(--foregroundColor);
    color: var(--foregroundColor);
    font-family: var(--bodyFont);
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
    background: color-mix(in srgb, var(--mutedColor) 40%, transparent 60%);
  }

  .textarea :global(::-webkit-scrollbar-thumb) {
    border-radius: 0.25rem;
    background: color-mix(in srgb, var(--primaryColor) 60%, transparent 40%);
  }
</style>

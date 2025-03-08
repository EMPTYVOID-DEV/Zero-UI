<script>
  import { createBubbler } from 'svelte/legacy';

  const bubble = createBubbler();
  
  
  /**
   * @typedef {Object} Props
   * @property {boolean} disabled
   * @property {{ text: string; description?: string } & {checked:boolean}} radioItem
   */

  /** @type {Props} */
  let { disabled, radioItem } = $props();
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->

<div class:disabled class="radioGroupItem" onclick={bubble('click')}>
  <button
    class="radio"
    role="radio"
    aria-checked={radioItem.checked}
    class:checked={radioItem.checked}
  >
    {#if radioItem.checked}
      <span></span>
    {/if}
  </button>
  <div class="label">
    <label for="radio">{radioItem.text}</label>
    {#if radioItem.description}
      <span>{radioItem.description}</span>
    {/if}
  </div>
</div>

<style>
  .radioGroupItem {
    display: grid;
    grid-template-columns: repeat(2, auto);
    align-items: center;
    justify-content: start;
    gap: 0.5rem;
    --text: var(--foregroundColor);
    --main-color: var(--primaryColor);
  }

  .disabled {
    --text: var(--mutedColor);
    --main-color: var(--mutedColor);
  }

  .radio {
    width: 1.25rem;
    aspect-ratio: 1/1;
    display: flex;
    background-color: transparent;
    border: 2px solid var(--main-color);
    padding: 2px;
    border-radius: 50%;
    outline: none;
    cursor: pointer;
  }

  .checked span {
    flex-grow: 1;
    aspect-ratio: 1/1;
    border-radius: 50%;
    background-color: var(--main-color);
  }

  .label {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }

  .label label,
  .label span {
    font-family: var(--bodyFont);
    font-size: var(--body);
  }
  .label label {
    color: var(--text);
  }
  .label span {
    color: var(--mutedColor);
  }

  .disabled button {
    cursor: not-allowed;
  }
</style>

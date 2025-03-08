<script>
  import { createEventDispatcher } from "svelte";
  import CloseIcon from "../../icons/closeIcon.svelte";

  
  
  
  
  /**
   * @typedef {Object} Props
   * @property {string} header
   * @property {string} description
   * @property {import("../../types").toastAction|null} toastAction
   * @property {import("../../types").iconComponent} icon
   */

  /** @type {Props} */
  let {
    header,
    description,
    toastAction,
    icon
  } = $props();
  const dispatcher = createEventDispatcher();

  function fireCloseEvent() {
    dispatcher("closeToast");
  }

  const SvelteComponent = $derived(icon);
</script>

<div class="customToast">
  <SvelteComponent />
  <div class="toastContent">
    <span class="header">{header}</span>
    <span class="description">{description}</span>
  </div>
  {#if toastAction}
    <button class="toastBtn" onclick={toastAction.action}>
      {toastAction.label}
    </button>
  {/if}
  <button class="close" onclick={fireCloseEvent}>
    <CloseIcon />
  </button>
</div>

<style>
  .customToast {
    position: relative;
    width: 100%;
    display: grid;
    grid-template-columns: max-content 1fr max-content;
    align-items: flex-start;
    gap: 0.25rem;
    padding: 0.5rem;
    border: 2px solid var(--main-color);
    border-radius: var(--border-radius);
    background-color: color-mix(
      in srgb,
      var(--main-color) 30%,
      transparent 70%
    );
  }
  .toastContent {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  .toastContent .header {
    font-size: var(--body);
    font-family: var(--bodyFont);
    font-weight: 600;
    color: var(--foregroundColor);
  }
  .toastContent .description {
    font-size: var(--body);
    font-family: var(--bodyFont);
    color: var(--foregroundColor);
  }
  .toastBtn {
    width: fit-content;
    padding-inline: 0.5rem;
    padding-block: 0.25rem;
    cursor: pointer;
    outline: none;
    border: none;
    background-color: var(--main-color);
    border-radius: var(--border-radius);
    color: var(--foregroundColor);
    font-family: var(--bodyFont);
    font-size: var(--body);
    font-weight: 600;
    align-self: center;
  }

  .close {
    background-color: var(--main-color);
    border: none;
    outline: none;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    top: -10%;
    right: -2%;
    cursor: pointer;
    border-radius: 50%;
    --icon: var(--foregroundColor);
  }
</style>

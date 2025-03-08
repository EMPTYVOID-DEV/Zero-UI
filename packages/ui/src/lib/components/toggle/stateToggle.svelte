<script>
  import { createEventDispatcher } from "svelte";
  import ValidIcon from "../../icons/validIcon.svelte";
  import CloseIcon from "../../icons/closeIcon.svelte";
  
  /**
   * @typedef {Object} Props
   * @property {boolean} [state]
   */

  /** @type {Props} */
  let { state = $bindable(false) } = $props();

  const dispatcher = createEventDispatcher();
  function toggleState() {
    state = !state;
    dispatcher("change", { newState: state });
  }
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<div class="toggle" class:active={state} onclick={toggleState}>
  <span class="circle">
    {#if state}
      <ValidIcon />
    {:else}
      <CloseIcon />
    {/if}
  </span>
</div>

<style>
  .toggle {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 3.5rem;
    aspect-ratio: 2;
    border-radius: 1rem;
    background-color: var(--mutedColor);
    cursor: pointer;
    transition: all 800ms ease;
    --icon: var(--mutedColor);
  }

  .active {
    --icon: var(--primaryColor);
    background-color: var(--primaryColor);
    justify-content: flex-end;
  }

  .circle {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 95%;
    aspect-ratio: 1/1;
    border-radius: 50%;
    background-color: var(--backgroundColor);
  }
</style>

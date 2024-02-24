<script>
  import { createEventDispatcher } from "svelte";
  import ValidIcon from "../../icons/validIcon.svelte";
  import CloseIcon from "../../icons/closeIcon.svelte";

  export let state = false;
  const dispatcher = createEventDispatcher();

  const toggleState = () => {
    state = !state;
    dispatcher("change", { newState: state });
  };
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class="toggle" class:active={state} on:click={toggleState}>
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
    width: var(--width, 3rem);
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

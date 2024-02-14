<script>
  import { createEventDispatcher } from "svelte";
  import LoadingIcon from "../../icons/loadingIcon.svelte";

  /**@type {string} this is the text for the button*/
  export let text = "button";

  /**@type {import("../../types").iconComponent|null} icon is optional for the button */
  export let icon = null;

  /**@type {import("../../types").asyncButtonAction} This needs to be an async function that handles the button click*/
  export let action;

  /**@type {"passive"|"primary"|"secondary"|"danger"}  Dictates the color based on the type*/
  export let type = "primary";

  const dispatcher = createEventDispatcher();

  /**@type {"idle"|"loading"}*/
  let state = "idle";

  /**@function*/
  /**@param {MouseEvent} event This function handles the click event*/
  async function handleClick(event) {
    if (state == "loading") return;
    state = "loading";
    try {
      const data = await action(event);
      dispatcher("resolve", { data });
    } catch (error) {
      dispatcher("rejected", { error });
    } finally {
      state = "idle";
    }
  }
</script>

<button class:loading={state == "loading"} class={type} on:click={handleClick}>
  {#if state == "loading"}
    <LoadingIcon />
  {:else}
    <svelte:component this={icon} />
  {/if}
  <span>{text}</span>
</button>

<style>
  .passive {
    --bg: var(--foregroundColor);
  }
  :is(.primary, .secondary, .danger, .secondary, .passive) {
    --text: var(--backgroundColor);
    --icon: var(--backgroundColor);
  }
  .primary {
    --bg: var(--primaryColor);
  }
  .secondary {
    --bg: var(--secondaryColor);
  }
  .danger {
    --bg: var(--dangerColor);
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--gap);
    width: fit-content;
    padding-inline: var(--padding-inline, 16px);
    padding-block: var(--padding-block, 8px);
    cursor: pointer;
    outline: none;
    border: none;
    background-color: var(--bg);
    border-radius: var(--border-radius);
    transition: all 400ms linear;
  }
  button span {
    text-transform: capitalize;
    color: var(--text);
    font-family: var(--bodyFont);
    font-size: var(--body);
    font-weight: 600;
  }
  .loading {
    opacity: 0.7;
    cursor: not-allowed;
  }
  .loading :global(svg) {
    width: 20px;
    height: 20px;
  }
</style>

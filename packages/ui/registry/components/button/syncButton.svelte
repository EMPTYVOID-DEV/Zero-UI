<script>
  /**@type {string} this is the text for the button*/
  export let text = "button";
  /**@type {import("../../types").iconComponent|null} icon is optional for the button */
  export let icon = null;
  /**@type {"passive"|"primary"|"secondary"|"danger"}  Dictates the color based on the type*/
  export let type = "primary";
</script>

<button on:click class={type}>
  <svelte:component this={icon} />
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
    gap: 4px;
    width: fit-content;
    padding-inline: var(--padding-inline, 16px);
    padding-block: var(--padding-block, 8px);
    cursor: pointer;
    outline: none;
    border: none;
    background-color: var(--bg);
    border-radius: var(--border-radius);
  }
  button span {
    text-transform: capitalize;
    color: var(--text);
    font-family: var(--bodyFont);
    font-size: var(--body);
    font-weight: 600;
  }
  button :global(svg) {
    width: 20px;
    height: 20px;
  }
</style>

<script>
  /**@type {string} this is vthe text for the button*/
  export let text = "button";
  /**@type {import("../../types").iconComponent|null} icon is optional for the button */
  export let icon = null;
  /**@type {"passive"|"primary"|"secondary"|"danger"|"confirm"}  Dictates the color based on the type*/
  export let type = "primary";
</script>

<button on:click class={type}>
  <svelte:component this={icon} />
  <span>{text}</span>
</button>

<style>
  .passive {
    --bg: var(--foregroundColor);
    --text: var(--backgroundColor);
    --icon: var(--backgroundColor);
  }
  :is(.primary, .secondary, .danger, .confirm, .secondary) {
    --text: var(--foregroundColor);
    --icon: var(--foregroundColor);
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
  .confirm {
    --bg: var(--confirmColor);
  }
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--gap);
    width: fit-content;
    padding-inline: 16px;
    padding-block: 8px;
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
    font-weight: 500;
    line-height: var(--lbody);
  }
</style>

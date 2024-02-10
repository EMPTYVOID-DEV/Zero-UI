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
  .primary {
    --bg: var(--primaryColor);
    --text: var(--foregroundColor);
    --icon: var(--foregroundColor);
  }
  .secondary {
    --bg: var(--secondaryColor);
    --text: var(--foregroundColor);
    --icon: var(--foregroundColor);
  }
  .danger {
    --bg: var(--dangerColor);
    --text: var(--foregroundColor);
    --icon: var(--foregroundColor);
  }
  .confirm {
    --bg: var(--confirmColor);
    --text: var(--foregroundColor);
    --icon: var(--foregroundColor);
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

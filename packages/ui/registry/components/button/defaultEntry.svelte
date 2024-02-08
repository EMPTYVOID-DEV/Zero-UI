<script>
  /**@type {string} this is the text for the button*/
  export let text = "button";
  /**@type {import("../../types").iconComponent|null} icon is optional for the button */
  export let icon = null;
  /**@type {"danger"|"success"|"primary"|"secondary"}  Dictates the color based on the state*/
  export let state = "primary";
</script>

<button on:click style="background-color: var(--{state}Color);">
  <svelte:component this={icon} />
  <span>{text}</span>
</button>

<style>
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    width: fit-content;
    padding-inline: 16px;
    padding-block: 8px;
    cursor: pointer;
    outline: none;
    border: none;
    border-radius: var(--border-radius);
  }
  button span {
    text-transform: capitalize;
    color: var(--foregroundColor);
    font-family: var(--bodyFont);
    font-size: var(--body);
    font-weight: 500;
    line-height: var(--lbody);
  }
</style>

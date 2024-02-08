<script>
  /** @type {string} Text for the button */
  export let text = "button";
  /** @type {import("../../types").iconComponent | null} Icon optional for the button  */
  export let icon = null;
  /** @type {"primary" | "secondary"} Dictates the color based on the state */
  export let state = "primary";
</script>

<button on:click class:secondary={state === "secondary"}>
  <svelte:component this={icon} />
  <span>{text}</span>
</button>

<style>
  button {
    --stateColor: var(--primaryColor);
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    width: fit-content;
    padding-inline: 16px;
    padding-block: 8px;
    cursor: pointer;
    outline: none;
    border: 2px solid var(--stateColor);
    border-radius: var(--border-radius);
    background-color: var(--backgroundColor);
    box-shadow:
      4px 4px 4px var(--stateColor),
      4px 4px 4px var(--stateColor);
    transition: all 350ms linear;
  }

  .secondary {
    --stateColor: var(--secondaryColor);
  }

  button:hover {
    box-shadow: 4px 4px 24px var(--stateColor);
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

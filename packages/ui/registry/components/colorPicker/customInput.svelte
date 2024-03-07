<script>
  /**
   * The props are passed by the svelte-awesome-color-picker component
   */
  /**@type {HTMLLabelElement}*/
  export let labelElement;
  /**@type {string}*/
  export let label;
  /**@type {string}*/
  export let hex;
  /**@type {boolean}*/
  export let isOpen;
  /**@type {string}*/
  export let name;
</script>

<input type="color" {name} id="colorPicker" on:click on:mousedown />
<!-- svelte-ignore a11y-no-noninteractive-element-interactions a11y-click-events-have-key-events -->
<label
  class="trigger"
  for="colorPicker"
  bind:this={labelElement}
  on:click|preventDefault
  on:mousedown|preventDefault
>
  <span class="hex">{hex}</span>
  <span class="bg" style="background-color: {hex};"></span>
</label>

<style>
  input {
    display: none;
  }
  .trigger {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    padding: 0.25rem;
    border-radius: var(--border-radius);
    border: 1px solid
      color-mix(in srgb, var(--primaryColor) 40%, transparent 60%);
    cursor: pointer;
  }
  .trigger:hover {
    border: 1px solid var(--primaryColor);
  }

  .trigger .bg {
    height: 2rem;
    aspect-ratio: 1/1;
    border-radius: 0.5rem;
  }
  .trigger .hex {
    display: flex;
    align-items: center;
    border-radius: var(--border-radius);
    padding-block: 0.5rem;
    padding-inline: 1rem;
    font-size: var(--body);
    font-family: var(--bodyFont);
    color: var(--foregroundColor);
    text-transform: uppercase;
  }
</style>

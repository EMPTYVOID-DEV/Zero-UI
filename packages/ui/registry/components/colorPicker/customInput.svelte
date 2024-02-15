<script>
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

<input
  type="color"
  {name}
  id="colorPicker"
  on:click|preventDefault
  on:mousedown|preventDefault
/>
<!-- svelte-ignore a11y-no-noninteractive-element-interactions a11y-click-events-have-key-events -->
<label
  class="trigger"
  for="colorPicker"
  bind:this={labelElement}
  on:click|preventDefault
  on:mousedown|preventDefault
>
  <span class="bg" style="background-color: {hex};"></span>
  <span class="hex">{hex}</span>
</label>

<style>
  input {
    display: none;
  }

  .trigger {
    display: flex;
    align-items: center;
    gap: var(--gap);
    width: var(--width, 80%);
    min-width: fit-content;
    height: 2rem;
    cursor: pointer;
  }
  .trigger .bg {
    height: 100%;
    aspect-ratio: 1/1;
    border-radius: 50%;
    border: 2px solid var(--foregroundColor);
    box-sizing: border-box;
  }
  .trigger .hex {
    height: 100%;
    display: flex;
    flex-grow: 1;
    align-items: center;
    box-sizing: border-box;
    border-radius: var(--border-radius);
    background-color: var(--foregroundColor);
    padding-block: 8px;
    padding-inline: 5px;
    padding-right: 2rem;
    font-size: var(--body);
    font-family: var(--bodyFont);
    color: var(--backgroundColor);
  }
</style>

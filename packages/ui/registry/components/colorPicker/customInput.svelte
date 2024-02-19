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

<input type="color" {name} id="colorPicker" on:click on:mousedown />
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
    gap: 8px;
    cursor: pointer;
  }
  .trigger .bg {
    height: 2rem;
    aspect-ratio: 1/1;
    border-radius: 50%;
  }
  .trigger .hex {
    width: fit-content;
    display: flex;
    align-items: center;
    border-radius: var(--border-radius);
    background-color: var(--foregroundColor);
    padding-block: 8px;
    padding-inline: 16px;
    font-size: var(--body);
    font-family: var(--bodyFont);
    color: var(--backgroundColor);
  }
</style>

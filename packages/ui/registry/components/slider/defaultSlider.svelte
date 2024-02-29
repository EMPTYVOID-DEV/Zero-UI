<script>
  //@ts-ignore
  import Slider from "@bulatdashiev/svelte-slider";
  /**@type {number}*/
  export let max = 100;
  /**@type {[number,number]}*/
  export let value = [0, max];
  /**@type {number}*/
  export let min = 0;
  /**@type {boolean}*/
  export let range = false;
  /*
   * This event is triggered with the selection range [min,max]
   * In case range prop is false the max value is the slider's max
   */
</script>

<div class="slider">
  <Slider {min} {max} {range} order bind:value on:input />
</div>

<style>
  .slider {
    width: var(--width, 100%);
    --track-bg: color-mix(in srgb, var(--mutedColor) 60%, transparent 40%);
    --progress-bg: var(--primaryColor);
    --thumb-bg: var(--primaryColor);
  }
</style>

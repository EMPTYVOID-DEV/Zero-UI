<script>
  //@ts-ignore
  import Slider from "@bulatdashiev/svelte-slider";
  
  
  
  
  /**
   * @typedef {Object} Props
   * @property {number} [max]
   * @property {[number,number]} [value]
   * @property {number} [min]
   * @property {boolean} [range] - This event is triggered with the selection range [min,max]
In case range prop is false the max value is the slider's max
   */

  /** @type {Props} */
  let {
    max = 100,
    value = $bindable([0, max]),
    min = 0,
    range = false
  } = $props();
  
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

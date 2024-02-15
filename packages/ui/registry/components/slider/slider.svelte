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
   * This event is triggered within the range [minEdge, maxEdge].
   * If the range is set to false, the event is fired with the maxEdge value of the slider.
   */
</script>

<div class="slider">
  <Slider {min} {max} {range} order bind:value on:input />
</div>

<style>
  .slider {
    width: 100%;
    --track-bg: color-mix(in srgb, var(--primaryColor) 40%, transparent 60%);
    --progress-bg: var(--primaryColor);
    --thumb-bg: var(--primaryColor);
  }
</style>

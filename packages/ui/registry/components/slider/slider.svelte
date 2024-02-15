<script>
  //@ts-ignore
  import Slider from "@bulatdashiev/svelte-slider";
  import { createEventDispatcher } from "svelte";
  /**@type {[number,number]}*/
  export let value = [0, 0];
  /**@type {number}*/
  export let max = 100;
  /**@type {number}*/
  export let min = 0;
  /**@type {boolean}*/
  export let range = false;
  const dispatcher = createEventDispatcher();
  /** @type {import("../../types").sliderEvent} */
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

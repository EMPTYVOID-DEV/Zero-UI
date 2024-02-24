<script>
  import ColorPicker from "svelte-awesome-color-picker";
  import CustomInput from "./customInput.svelte";
  /**@type {string}*/
  export let name = "";
  /**@type {string}*/
  export let hex = "#8a2be2";
  /**@type {boolean}*/
  export let isAlpha = false;
</script>

<ColorPicker
  on:input
  {isAlpha}
  {name}
  {hex}
  components={{ input: CustomInput }}
  --picker-z-index="10"
  --picker-indicator-size="0.75rem"
  --focus-color="var(--primaryColor)"
  --cp-bg-color="var(--foregroundColor)"
  --cp-border-color="var(--backgroundColor)"
  --cp-input-color="color-mix(in srgb , var(--primaryColor) 30%, transparent 70%)"
  --cp-button-hover-color="var(--primaryColor)"
/>

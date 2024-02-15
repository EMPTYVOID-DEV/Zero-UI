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
  --picker-indicator-size="12px"
  --focus-color="var(--primaryColor)"
  --cp-bg-color="var(--foregroundColor)"
  --cp-border-color="var(--backgroundColor)"
  --cp-input-color="color-mix(in srgb , var(--primaryColor) 30%, transparent 70%)"
  --cp-button-hover-color="color-mix(in srgb , var(--primaryColor) 50%, transparent 50%)"
/>

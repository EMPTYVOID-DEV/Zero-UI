<script>
  import Code from "./code.svelte";
  /**@type {string}*/
  export let code;
  /**@type {boolean} This prop will decide which svelte-highlight theme to use*/
  export let darkMode = false;
</script>

<div class="singlePageCode">
  <Code {code} {darkMode} singelPage={true} />
</div>

<style>
  .singlePageCode {
    width: var(--width, 100%);
  }
</style>

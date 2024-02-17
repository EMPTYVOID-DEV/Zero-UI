<script>
  import Code from "./code.svelte";
  /**@type {string}*/
  export let code;
  /**@type {boolean}*/
  export let darkMode = false;
</script>

<div class="singlePageCode">
  <Code {code} {darkMode} useRadius={true} />
</div>

<style>
  .singlePageCode {
    width: var(--width, 100%);
  }
</style>

<script>
  import Code from "./code.svelte";
  /**@type {string}*/
  export let code;
  /**@type {boolean}*/
  export let darkMode = false;
</script>

<Code {code} {darkMode} useRadius={true} />

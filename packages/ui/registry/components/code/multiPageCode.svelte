<script>
  import Code from "./code.svelte";
  import PageChanger from "./pageChanger.svelte";
  /**@type {{name:string,code:string}[]}*/
  export let codePages = [];
  /**@type {boolean}*/
  export let darkMode = false;
  /**@type {number}*/
  export let activePage = 0;
  /**The Page change will fire an event when the active page changes*/
</script>

<div class="multiPageCode">
  <PageChanger
    on:change
    pages={codePages.map((el) => el.name)}
    bind:activePage
  />
  {#key activePage}
    <div class="page">
      <Code code={codePages[activePage].code} {darkMode} singelPage={false} />
    </div>
  {/key}
</div>

<style>
  .multiPageCode {
    width: var(--width, 100%);
    display: flex;
    flex-direction: column;
  }
</style>

<script>
  import Code from "./code.svelte";
  import PageSlider from "./pageChanger.svelte";
  /**
   * @type {{name:string,code:string}[]}
   */
  export let codePages = [];
  /**@type {boolean}*/
  export let darkMode = false;
  let activePage = 0;
</script>

<div class="codePages">
  <PageSlider pages={codePages.map((el) => el.name)} bind:activePage />
  {#key activePage}
    <div class="page">
      <Code code={codePages[activePage].code} {darkMode} />
    </div>
  {/key}
</div>

<style>
  .codePages {
    display: flex;
    flex-direction: column;
  }
</style>

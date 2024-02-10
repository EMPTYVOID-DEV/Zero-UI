<script>
  import { createEventDispatcher } from "svelte";
  const dispatcher = createEventDispatcher();
  /**@type {string[]}*/
  export let pages = [];
  let activePage = 0;
</script>

<div class="pageSlider">
  {#each pages as page, index}
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <span
      class:active={activePage == index}
      on:click={() => {
        activePage = index;
        dispatcher("changePage", { activePage });
      }}>{page}</span
    >
  {/each}
</div>

<style>
  .pageSlider {
    display: flex;
    align-items: center;
  }
  .pageSlider span {
    font-family: var(--bodyFont);
    font-size: var(--body);
    color: var(--mutedColor);
    padding-inline: 16px;
    padding-block: 8px;
    cursor: pointer;
  }
  .pageSlider .active {
    color: var(--backgroundColor);
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
    background-color: var(--foregroundColor);
    font-weight: bold;
  }
</style>

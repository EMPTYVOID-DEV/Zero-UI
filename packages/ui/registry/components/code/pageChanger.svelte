<script>
  import { createEventDispatcher } from "svelte";

  /**@type {string[]}*/
  export let pages = [];
  /**@type {number}*/
  export let activePage;
  const dispatcher = createEventDispatcher();
</script>

<div class="pageSlider">
  {#each pages as page, index}
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <span
      class:active={activePage == index}
      on:click={() => {
        dispatcher("change", {
          activePageIndex: index,
        });
        activePage = index;
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
    color: var(--foregroundColor);
    padding-inline: 1rem;
    padding-block: 0.5rem;
    cursor: pointer;
  }
  .pageSlider .active {
    color: var(--backgroundColor);
    border-top-left-radius: 0.25rem;
    border-top-right-radius: 0.25rem;
    background-color: var(--foregroundColor);
    font-weight: 600;
  }
</style>

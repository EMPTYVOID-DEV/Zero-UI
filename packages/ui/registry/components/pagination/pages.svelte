<script>
  import DotsIcon from "../../icons/dotsIcon.svelte";
  /**@type {number}*/
  export let start;
  /**@type {number}*/
  export let activePage;
  /**@type {number}*/
  export let end;
  /** @type {string[]} */
  export let pages;
  let numberOfPages = pages.length;
</script>

<div class="pages">
  {#if start !== 1}
    <a href={pages[0]} class="page" on:click={() => (activePage = 1)}>1</a>
    <span class="delimiter">
      <DotsIcon />
    </span>
  {/if}

  {#each pages as page, index}
    {#if index + 1 <= end && index + 1 >= start}
      <a
        data-sveltekit-preload-data
        href={page}
        class="page"
        class:active={index + 1 === activePage}
        on:click={() => (activePage = index + 1)}>{index + 1}</a
      >
    {/if}
  {/each}

  {#if end !== numberOfPages}
    <span class="delimiter">
      <DotsIcon />
    </span>
    <a
      href={pages.at(-1)}
      class="page"
      on:click={() => (activePage = numberOfPages)}>{numberOfPages}</a
    >
  {/if}
</div>

<style>
  .pages {
    display: flex;
    align-items: center;
    gap: 0.25rem;
  }
  .page {
    min-width: 2.25rem;
    min-height: 2.25rem;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: var(--foregroundColor);
    background-color: transparent;
    font-size: var(--small);
    font-family: var(--bodyFont);
    border-radius: 0.25rem;
  }
  .active {
    background-color: var(--primaryColor);
    color: var(--backgroundColor);
  }
  .page:not(.active):hover {
    background-color: color-mix(
      in srgb,
      var(--primaryColor) 40%,
      transparent 60%
    );
  }
  .delimiter {
    --icon: var(--foregroundColor);
  }
</style>

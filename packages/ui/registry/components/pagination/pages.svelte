<script>
  import DotsIcon from "../../icons/dotsIcon.svelte";
  /**@type {number}*/
  export let start;
  /**@type {number}*/
  export let activePage;
  /**@type {number}*/
  export let end;
  /** @type {number} */
  export let numberOfPages;
</script>

<div class="pages">
  {#if start !== 1}
    <button class="page" on:click={() => (activePage = 1)}>1</button>
    <span class="delimiter">
      <DotsIcon />
    </span>
  {/if}

  {#each Array(numberOfPages) as page, index}
    {#if index + 1 <= end && index + 1 >= start}
      <button
        class="page"
        class:active={index + 1 === activePage}
        on:click={() => (activePage = index + 1)}>{index + 1}</button
      >
    {/if}
  {/each}

  {#if end !== numberOfPages}
    <span class="delimiter">
      <DotsIcon />
    </span>
    <button class="page" on:click={() => (activePage = numberOfPages)}
      >{numberOfPages}</button
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
    border: none;
    outline: none;
    background-color: transparent;
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

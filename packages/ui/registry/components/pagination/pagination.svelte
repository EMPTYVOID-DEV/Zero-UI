<script>
  import RightIcon from "../../icons/rightIcon.svelte";
  import LeftIcon from "../../icons/leftIcon.svelte";
  import Pages from "./pages.svelte";

  /** @type {string[]} */
  export let pages = [];
  /**@type {number}*/
  export let activePage = 1;

  let siblingsCount = 1;
  let numberOfPages = pages.length;
  $: visiblePages = adjustToActive(activePage);

  /**
   * @function adjustToActive - Adjust visible pages based on active page and siblings count
   * @param {number} activePage
   * @returns {{ start: number; end: number; }} the return value is the range of visible pages
   */
  function adjustToActive(activePage) {
    let start = Math.max(1, activePage - siblingsCount);
    let end = Math.min(numberOfPages, activePage + siblingsCount);
    let pagesDiff = siblingsCount * 2 - (end - start);

    if (pagesDiff !== 0) {
      if (end + pagesDiff <= numberOfPages) {
        end += pagesDiff;
      } else if (start - pagesDiff >= 1) {
        start -= pagesDiff;
      }
    }

    if (numberOfPages - end === 1) {
      end = numberOfPages;
    }
    if (start - 1 === 1) {
      start = 1;
    }

    return {
      start,
      end,
    };
  }
</script>

<div class="pagination">
  <button
    class="control"
    disabled={activePage === 1}
    on:click={() => (activePage -= 1)}
  >
    <LeftIcon />
    <span>Previous</span>
  </button>

  <Pages
    bind:activePage
    start={visiblePages.start}
    end={visiblePages.end}
    {pages}
  />

  <button
    disabled={activePage === numberOfPages}
    class="control"
    on:click={() => (activePage += 1)}
  >
    <span>Next</span>
    <RightIcon />
  </button>
</div>

<style>
  .pagination {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .control {
    display: flex;
    align-items: center;
    justify-content: center;
    width: fit-content;
    cursor: pointer;
    outline: none;
    border: none;
    background-color: transparent;
    color: var(--foregroundColor);
    font-family: var(--bodyFont);
    font-size: var(--small);
    font-weight: 600;
    --icon: var(--foregroundColor);
  }
  .control:hover {
    color: var(--primaryColor);
    --icon: var(--primaryColor);
  }
  .control :global(svg) {
    width: 20px;
    height: 20px;
  }
  .control:disabled {
    color: var(--mutedColor);
    --icon: var(--mutedColor);
    cursor: default;
  }
</style>

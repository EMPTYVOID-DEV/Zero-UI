<script>
  import SearchIcon from "../../icons/searchIcon.svelte";
  import UpIcon from "../../icons/upIcon.svelte";
  /**@type {string}*/
  export let placeholder;
  /**@type {boolean}*/
  export let showFullMobile;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class="mobileSearch" class:show={!showFullMobile} on:click>
  <SearchIcon />
</div>

<svelte:window on:keyup />

<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="SearchInput" class:notShow={!showFullMobile} on:click>
  <SearchIcon />
  <span>{placeholder}</span>
  <div class="command">
    <UpIcon />
    <span>K</span>
  </div>
</div>

<style>
  .SearchInput {
    width: var(--width, fit-content);
    box-sizing: border-box;
    border-radius: var(--border-radius);
    border: 2px solid var(--foregroundColor);
    background-color: transparent;
    display: flex;
    align-items: center;
    padding-inline: 0.5rem;
    padding-block: 0.25rem;
    gap: 0.5rem;
    cursor: pointer;
  }
  .SearchInput span {
    font-size: var(--small);
    font-family: var(--bodyFont);
    color: var(--foregroundColor);
  }
  .command {
    display: flex;
    align-items: center;
    padding: 0.25rem;
    border: 2px solid var(--foregroundColor);
    border-radius: inherit;
    gap: 0.25rem;
    margin-left: auto;
  }
  .mobileSearch {
    display: none;
  }
  @media screen and (width<768px) {
    .SearchInput.notShow {
      display: none;
    }
    .mobileSearch.show {
      display: inline-block;
      width: fit-content;
    }
  }
</style>

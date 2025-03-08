<script>
  import { createBubbler } from 'svelte/legacy';

  const bubble = createBubbler();
  import SearchIcon from "../../icons/searchIcon.svelte";
  import UpIcon from "../../icons/upIcon.svelte";
  
  
  /**
   * @typedef {Object} Props
   * @property {string} placeholder
   * @property {boolean} showFullMobile
   */

  /** @type {Props} */
  let { placeholder, showFullMobile } = $props();
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<div class="mobileSearch" class:show={!showFullMobile} onclick={bubble('click')}>
  <SearchIcon />
</div>

<svelte:window onkeyup={bubble('keyup')} />

<!-- svelte-ignore a11y_no_static_element_interactions -->
<!-- svelte-ignore a11y_click_events_have_key_events -->
<div class="SearchInput" class:notShow={!showFullMobile} onclick={bubble('click')}>
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
    border-radius: var(--border-radius);
    border: 2px solid var(--foregroundColor);
    background-color: transparent;
    display: grid;
    grid-template-columns: max-content auto max-content;
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
    --icon: var(--foregroundColor);
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

<script>
  import { quadInOut } from "svelte/easing";
  import { scale } from "svelte/transition";
  import CloseIcon from "../../icons/closeIcon.svelte";
  import SearchIcon from "../../icons/searchIcon.svelte";
  import Dialog from "../dialog/defaultDialog.svelte";
  import Category from "./category.svelte";
  import SearchInput from "./searchInput.svelte";
  import { createEventDispatcher } from "svelte";

  
  
  
  /**
   * @typedef {Object} Props
   * @property {boolean} [showFullMobile]
   * @property {import("../../types").category[]} [categories]
   * @property {string} [placeholder]
   */

  /** @type {Props} */
  let { showFullMobile = false, categories = [], placeholder = "Search ..." } = $props();

  const dispatcher = createEventDispatcher();
  /**@function handleChange will fire an event w*/
  /**@type {import("../../types").inputChangeHandler<HTMLInputElement>}*/
  function handleChange(e) {
    dispatcher("change", {
      query: e.currentTarget.value,
    });
  }
</script>

<Dialog >
  {#snippet trigger({ open })}
  
      <SearchInput
        {showFullMobile}
        {placeholder}
        on:click={() => open()}
        on:keyup={(e) => {
          if (e.ctrlKey && e.shiftKey && e.key == "K") open();
        }}
      />
    
  {/snippet}
  {#snippet children({ close })}
    <main
      class="searchModel"
      transition:scale={{
        duration: 520,
        easing: quadInOut,
        start: 0,
        opacity: 0.2,
      }}
    >
      <nav class="searchBar">
        <SearchIcon />
        <input type="text" {placeholder} oninput={handleChange} />
        <!-- svelte-ignore a11y_click_events_have_key_events -->
        <!-- svelte-ignore a11y_no_static_element_interactions -->
        <span class="close" onclick={() => close()}>
          <CloseIcon />
        </span>
      </nav>
      <div class="categories">
        {#each categories as category}
          <Category {category} />
        {/each}
      </div>
    </main>
  {/snippet}
</Dialog>

<style>
  .searchModel {
    width: 50vw;
    max-height: 60vh;
    display: flex;
    flex-direction: column;
    background-color: var(--backgroundColor);
    border-radius: var(--border-radius);
    border: 2px solid var(--primaryColor);
  }
  .searchBar {
    width: 100%;
    display: flex;
    align-items: center;
    padding: 0.5rem;
    border-bottom: 1px solid
      color-mix(in srgb, var(--mutedColor) 40%, transparent 60%);
  }
  .searchBar input {
    flex-grow: 1;
    border: none;
    outline: none;
    color: var(--foregroundColor);
    background-color: transparent;
    font-size: var(--body);
    font-family: var(--bodyFont);
  }

  .searchBar .close {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2px;
    border-radius: 50%;
    border: 1px solid var(--primaryColor);
    cursor: pointer;
  }
  .categories {
    width: 100%;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
  }
  .searchModel ::-webkit-scrollbar {
    width: 0.5rem;
  }
  .searchModel ::-webkit-scrollbar-track {
    border-radius: 0;
    background: color-mix(in srgb, var(--mutedColor) 40%, transparent 60%);
  }

  .searchModel ::-webkit-scrollbar-thumb {
    border-radius: 0.25rem;
    background: color-mix(in srgb, var(--primaryColor) 60%, transparent 40%);
  }

  @media screen and (width<768px) {
    .searchModel {
      width: 90vw;
    }
  }
</style>

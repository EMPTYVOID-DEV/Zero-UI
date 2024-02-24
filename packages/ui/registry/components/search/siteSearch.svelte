<script>
  import { quadInOut } from "svelte/easing";
  import { scale } from "svelte/transition";
  import CloseIcon from "../../icons/closeIcon.svelte";
  import SearchIcon from "../../icons/searchIcon.svelte";
  import Dialog from "../dialog/dialog.svelte";
  import Category from "./category.svelte";
  import SearchInput from "./searchInput.svelte";
  import { createEventDispatcher } from "svelte";

  /**@type {import("../../types").category[]}*/
  export let categories = [];

  const dispatcher = createEventDispatcher();

  /**@type {import("../../types").inputChangeHandler<HTMLInputElement>}*/
  function handleChange(e) {
    dispatcher("change", {
      query: e.currentTarget.value,
    });
  }
</script>

<Dialog let:close>
  <svelte:fragment slot="trigger" let:open>
    <SearchInput
      on:click={() => open()}
      on:keyup={(e) => {
        if (e.ctrlKey && e.shiftKey && e.key == "K") open();
      }}
    />
  </svelte:fragment>
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
      <input type="text" placeholder="Search..." on:input={handleChange} />
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <!-- svelte-ignore a11y-no-static-element-interactions -->
      <span class="clear" on:click={() => close()}>
        <CloseIcon />
      </span>
    </nav>
    <div class="categories">
      {#each categories as category}
        <Category {category} />
      {/each}
    </div>
  </main>
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
    box-sizing: border-box;
    width: 100%;
    display: flex;
    align-items: center;
    padding: 8px;
    border-bottom: 1px solid
      color-mix(in srgb, var(--foregroundColor) 30%, transparent 70%);
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

  .searchBar .clear {
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
  .searchModel :global(::-webkit-scrollbar) {
    width: 0.5rem;
  }
  .searchModel :global(::-webkit-scrollbar-track) {
    border-radius: 0;
    background: color-mix(in srgb, var(--foregroundColor) 40%, transparent 60%);
  }

  .searchModel :global(::-webkit-scrollbar-thumb) {
    border-radius: 4px;
    background: color-mix(in srgb, var(--primaryColor) 60%, transparent 40%);
  }

  @media screen and (width<768px) {
    .searchModel {
      width: 90vw;
    }
  }
</style>

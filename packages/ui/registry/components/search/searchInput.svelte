<script>
  import SearchIcon from "../../icons/searchIcon.svelte";
  import UpIcon from "../../icons/upIcon.svelte";
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class="SearchInput" on:click on:keyup>
  <SearchIcon />
  <span class="label">Quick Search</span>
  <div class="command">
    <UpIcon />
    <span>K</span>
  </div>
</div>

<style>
  .SearchInput {
    width: var(--width, 80%);
    box-sizing: border-box;
    border-radius: var(--border-radius);
    border: 2px solid var(--foregroundColor);
    background-color: transparent;
    display: flex;
    align-items: center;
    padding-inline: 8px;
    padding-block: 8px;
    gap: 8px;
    cursor: pointer;
  }
  .SearchInput span {
    font-size: var(--body);
    font-family: var(--bodyFont);
    color: var(--foregroundColor);
  }
  .command {
    display: flex;
    align-items: center;
    padding: 4px;
    border: 2px solid var(--foregroundColor);
    border-radius: inherit;
    gap: 4px;
    margin-left: auto;
  }
</style>

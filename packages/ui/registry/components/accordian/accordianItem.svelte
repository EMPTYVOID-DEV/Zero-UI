<script>
  import UpIcon from "../../icons/upIcon.svelte";
  import DownIcon from "../../icons/downIcon.svelte";
  import { slide } from "svelte/transition";

  /**@type {string}*/
  export let title;
  /**@type {string}*/
  export let description;
  /**@type {boolean}*/
  export let show = false;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class="accordianItem" on:click={() => (show = !show)}>
  <div class="title">
    <span>{title}</span>
    {#if show}
      <UpIcon />
    {:else}
      <DownIcon />
    {/if}
  </div>
  {#if show}
    <span class="description" transition:slide>{description}</span>
  {/if}
</div>

<style>
  .accordianItem {
    display: flex;
    flex-direction: column;
    padding-block: 20px;
    border-bottom: 1px solid var(--mutedColor);
    cursor: pointer;
  }
  .title {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .description {
    margin-top: 20px;
  }
  span {
    white-space: pre-wrap;
    color: var(--foregroundColor);
    font-size: var(--body);
    font-family: var(--bodyFont);
  }
  .accordianItem:hover .title span {
    text-decoration: underline;
  }
</style>

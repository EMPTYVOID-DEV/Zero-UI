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
    padding-block: 8px;
    padding-inline: 16px;
    cursor: pointer;
    border-radius: var(--border-radius);
    border: 2px solid
      color-mix(in srgb, var(--primaryColor) 40%, transparent 60%);
  }
  .title {
    display: grid;
    grid-template-columns: auto auto;
    align-items: center;
    justify-content: space-between;
    gap: 4px;
  }

  .title span {
    font-weight: 600;
  }

  .description {
    margin-top: 8px;
  }

  span {
    word-break: break-word;
    color: var(--foregroundColor);
    white-space: pre-wrap;
    font-size: var(--body);
    font-family: var(--bodyFont);
  }
</style>

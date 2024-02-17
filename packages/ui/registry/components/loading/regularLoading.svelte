<script>
  import LoadingIcon from "../../icons/loadingIcon.svelte";

  /**@type {"loading"|"error"|"success"}*/
  export let state = "loading";
</script>

{#if state == "loading"}
  <div class="loading">
    <LoadingIcon />
    <span>Loading</span>
  </div>
{:else if state == "success"}
  <slot name="success">success</slot>
{:else}
  <slot name="error">error</slot>
{/if}

<style>
  .loading {
    display: flex;
    align-items: center;
    gap: 4px;
  }
  .loading :global(svg) {
    width: 28px;
    height: 28px;
  }
  .loading span {
    font-size: var(--h4);
    font-family: var(--headerFont);
    font-weight: bold;
    color: color-mix(in srgb, var(--primaryColor) 70%, transparent 30%);
  }
</style>

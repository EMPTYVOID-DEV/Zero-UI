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
    gap: 0.25rem;
  }
  .loading :global(svg) {
    width: 2.75rem;
    height: 2.75rem;
  }
  .loading span {
    font-size: var(--h4);
    font-family: var(--headerFont);
    font-weight: bold;
    color: var(--foregroundColor);
  }
</style>

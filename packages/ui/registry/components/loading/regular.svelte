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
  <slot name="success" />
{:else}
  <slot name="error" />
{/if}

<style>
  .loading {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: var(--gap);
  }
  .loading :global(svg) {
    width: 32px;
    height: 32px;
  }
  .loading span {
    font-size: var(--h4);
    font-family: var(--headerFont);
    font-weight: bold;
    color: color-mix(in srgb, var(--primaryColor) 50%, transparent 50%);
  }
</style>

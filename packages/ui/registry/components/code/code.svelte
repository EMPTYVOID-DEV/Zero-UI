<script>
  import CopyIcon from "../../icons/copyIcon.svelte";
  import DoneIcon from "../../icons/doneIcon.svelte";
  import { edgeLight, edgeDark } from "svelte-highlight/styles";
  import { HighlightAuto, LineNumbers } from "svelte-highlight";
  /**@type {boolean}*/
  export let darkMode;
  /**@type {string}*/
  export let code;
  /**@type {boolean}*/
  export let useRadius = false;
  let copyStatement = false;
  /**
   *
   */
  async function copyCode() {
    navigator.clipboard.writeText(code);
    copyStatement = true;
    await new Promise((res) => setTimeout(res, 800));
    copyStatement = false;
  }
</script>

<svelte:head>
  {#if darkMode}
    {@html edgeLight}
  {:else}
    {@html edgeDark}
  {/if}
</svelte:head>

<div class="code" class:radius={useRadius}>
  {#if copyStatement}
    <span class="control">
      <DoneIcon />
    </span>
  {:else}
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <span class="control" on:click={copyCode}>
      <CopyIcon />
    </span>
  {/if}
  <HighlightAuto {code} let:highlighted>
    <LineNumbers {highlighted} hideBorder />
  </HighlightAuto>
</div>

<style>
  .code {
    overflow: hidden;
    position: relative;
  }
  .code :global(> :not(.control)) {
    width: 100%;
    max-height: 500px;
  }
  .code .control {
    width: fit-content;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    border: 1px solid var(--primaryColor);
    border-radius: 4px;
    padding: 2px;
    top: clamp(10px, 2%, 20px);
    right: clamp(15px, 3%, 25px);
    cursor: pointer;
    z-index: 100;
  }

  .radius {
    border-radius: var(--border-radius);
  }

  .code :global(::-webkit-scrollbar) {
    width: 0.5rem;
  }
  .code :global(::-webkit-scrollbar-track) {
    border-radius: 0;
    background: color-mix(in srgb, var(--foregroundColor) 40%, transparent 60%);
  }

  .code:global(::-webkit-scrollbar-thumb) {
    border-radius: 4px;
    background: color-mix(in srgb, var(--primaryColor) 60%, transparent 40%);
  }
</style>

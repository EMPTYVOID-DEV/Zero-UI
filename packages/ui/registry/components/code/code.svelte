<script>
  import CopyIcon from "../../icons/copyIcon.svelte";
  import DoneIcon from "../../icons/doneIcon.svelte";
  import { githubDark, github } from "svelte-highlight/styles";
  import { HighlightAuto, LineNumbers } from "svelte-highlight";
  /**@type {boolean}*/
  export let darkMode;
  /**@type {string}*/
  export let code;
  /**@type {boolean}*/
  export let useRadius = false;
  let copyStatement = false;
  /**
   *@function copyCode will handle copying the code to the user keyboard
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
    {@html github}
  {:else}
    {@html githubDark}
  {/if}
</svelte:head>

<div class="code" class:radius={useRadius}>
  {#if copyStatement}
    <span class="control">
      <DoneIcon />
    </span>
  {:else}
    <button class="control" on:click={copyCode}>
      <CopyIcon />
    </button>
  {/if}
  <HighlightAuto {code} let:highlighted>
    <LineNumbers {highlighted} hideBorder />
  </HighlightAuto>
</div>

<style>
  .code {
    overflow: hidden;
    position: relative;
    border-radius: var(--border-radius);
  }
  /* These styles are for svelte highlight code block  */
  .code :global(> :not(.control)) {
    width: 100%;
    max-height: var(--max-height, 500px);
  }
  .code .control {
    width: fit-content;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    background-color: transparent;
    outline: none;
    border: 1px solid var(--primaryColor);
    border-radius: 0.25rem;
    padding: 2px;
    top: clamp(0.75rem, 2%, 1.25rem);
    right: clamp(1rem, 3%, 1.5rem);
    cursor: pointer;
    z-index: 2;
  }

  .code:not(.radius) {
    border-top-left-radius: 0;
  }

  .code :global(::-webkit-scrollbar) {
    width: 0.5rem;
  }
  .code :global(::-webkit-scrollbar-track) {
    border-radius: 0;
    background: color-mix(in srgb, var(--mutedColor) 40%, transparent 60%);
  }

  .code :global(::-webkit-scrollbar-thumb) {
    border-radius: 0.25rem;
    background: color-mix(in srgb, var(--primaryColor) 60%, transparent 40%);
  }
</style>

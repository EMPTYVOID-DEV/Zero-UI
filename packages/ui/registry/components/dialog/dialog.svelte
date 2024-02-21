<script>
  import { tick } from "svelte";
  import { quadInOut } from "svelte/easing";
  import { scale } from "svelte/transition";

  /**@type {HTMLDialogElement}*/
  let dialogRef;
  let isOpen = false;
  async function open() {
    isOpen = true;
    await tick();
    dialogRef.showModal();
  }
  function close() {
    isOpen = false;
  }
</script>

<slot name="trigger" {open} />

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<!-- outside click to close the model -->
{#if isOpen}
  <dialog
    transition:scale={{
      duration: 600,
      easing: quadInOut,
      start: 0,
      opacity: 0.2,
    }}
    bind:this={dialogRef}
    on:click|self={() => close()}
    on:keydown={(e) => {
      if (e.key == "esc") close();
    }}
  >
    <slot {close} />
  </dialog>
{/if}

<style>
  dialog {
    border: 0;
    padding: 0;
    outline: 0;
    box-shadow: none;
    background: none;
  }

  dialog::backdrop {
    background: rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(4px);
  }
</style>

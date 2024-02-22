<script>
  import { tick } from "svelte";

  /**@type {HTMLDialogElement}*/
  let dialogRef;
  /**
   * The reason we re opening and closing the dialog by toggling a variable is to let svelte animate the slot.
   */
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
    bind:this={dialogRef}
    on:click|self={() => close()}
    on:close={(e) => {
      /**
       * you need to re-open the model after the browser closes it.
       * then close it using the close function
       * */
      dialogRef.showModal();
      close();
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
    max-width: 100vw !important;
    max-height: 100vh !important;
  }

  dialog::backdrop {
    background: rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(4px);
  }
</style>

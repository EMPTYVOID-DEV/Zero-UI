<script>
  import { afterUpdate, tick } from "svelte";

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
  // This creates event listener to escape key only when the dialog is open (on screen)
  afterUpdate(() => {
    if (dialogRef)
      dialogRef.addEventListener("keydown", (e) => {
        if (e.key == "esc") close();
      });
  });
</script>

<slot name="trigger" {open}>
  <button class="defaultTrigger" on:click={() => open()}>open</button>
</slot>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<!-- outside click to close the model -->
{#if isOpen}
  <dialog bind:this={dialogRef} on:click|self={() => close()}>
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
    overflow: hidden;
  }
  dialog::backdrop {
    background: rgba(0, 0, 0, 0.3);
  }
  .defaultTrigger {
    width: fit-content;
    padding-inline: 16px;
    padding-block: 8px;
    cursor: pointer;
    outline: none;
    border: none;
    font-size: var(--body);
    font-family: var(--bodyFont);
    font-weight: 600;
    color: var(--backgroundColor);
    background-color: var(--foregroundColor);
    border-radius: var(--border-radius);
  }
</style>

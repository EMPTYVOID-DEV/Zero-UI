<script>
  import { createEventDispatcher } from "svelte";

  /**@type {import("../../types").checkItem[]}*/
  export let checklist = [];

  const dispatcher = createEventDispatcher();
  /**
   * @function toggleChecklistItem
   * This function handles the toggling of the checked property for a specific checklist item upon a click event.
   * It triggers a custom "change" event with a detail object containing information about the clicked item's index and its updated checked status.
   * @param {number} itemIndex - The index of the checklist item that changed its status.
   */
  function toggleChecklistItem(itemIndex) {
    if (checklist[itemIndex].disabled) return;
    const oldStatus = checklist[itemIndex].checked;
    checklist[itemIndex].checked = !oldStatus;
    dispatcher("change", {
      checked: checklist[itemIndex].checked,
      itemIndex,
    });
  }
</script>

<div class="checkList">
  {#each checklist as item, index}
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div
      class="checkListItem"
      on:click={() => {
        toggleChecklistItem(index);
      }}
    >
      <input
        type="checkbox"
        disabled={item.disabled}
        value={item.value || ""}
        name={item.name || ""}
        checked={item.checked}
      />
      <label for="" class:disabled={item.disabled}>{item.text}</label>
    </div>
  {/each}
</div>

<style>
  .checkList {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  .checkList .checkListItem {
    display: grid;
    grid-template-columns: repeat(2, auto);
    align-items: center;
    justify-content: start;
    gap: 8px;
  }
  .checkListItem input {
    cursor: pointer;
    accent-color: var(--primaryColor);
  }

  .checkListItem label {
    white-space: pre-wrap;
    word-break: break-word;
    color: var(--foregroundColor);
    font-family: var(--bodyFont);
    font-size: var(--body);
  }

  .checkListItem input:disabled {
    cursor: not-allowed;
  }
  .checkListItem .disabled {
    color: var(--mutedColor);
  }
</style>

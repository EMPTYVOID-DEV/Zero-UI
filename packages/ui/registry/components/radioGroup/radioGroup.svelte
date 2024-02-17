<script>
  import { createEventDispatcher } from "svelte";

  /**@type {number}*/
  export let defaultChoice = 0;
  /**@type {boolean}*/
  export let disabled = false;
  /**@type {{ text: string;name?: string; value?: string;}[]}*/
  export let radioGroup = [];
  /**
   * creating new list of group items with the checked property
   *  also setting the checked property of the item with the index matching the defaultChoice
   */
  const enhancedGroup = radioGroup.map((el, index) => {
    return {
      ...el,
      checked: index === defaultChoice,
    };
  });

  const dispatcher = createEventDispatcher();

  /**
   * @function toggleRadioGroup
   * This function handles the toggling of the checked property for a specific choice within a radioGroup upon a click event.
   * It ensures that only the clicked choice is checked, and all other choices are unchecked.
   * Additionally, it triggers a custom "change" event, providing a detail object with the selected property. The selected property indicates either the index of the currently selected choice or null if no choice is selected.
   * @param {number} choiceIndex - The index of the choice whose state has changed.
   */
  function toggleRadioGroup(choiceIndex) {
    if (disabled) return;
    for (let i = 0; i < enhancedGroup.length; i++) {
      if (i === choiceIndex) {
        const oldStatus = enhancedGroup[i].checked;
        enhancedGroup[i].checked = !oldStatus;
      } else {
        enhancedGroup[i].checked = false;
      }
    }
    dispatcher("change", {
      selected: enhancedGroup[choiceIndex].checked ? choiceIndex : null,
    });
  }
</script>

<div class="radioGroup">
  {#each enhancedGroup as item, index}
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div
      class="radioGroupItem"
      on:click={() => {
        toggleRadioGroup(index);
      }}
    >
      <input
        {disabled}
        type="radio"
        name={item.name}
        value={item.value}
        checked={item.checked}
      />
      <label for={item.name} class:disabled>{item.text}</label>
    </div>
  {/each}
</div>

<style>
  .radioGroup {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  .radioGroup .radioGroupItem {
    display: grid;
    grid-template-columns: repeat(2, auto);
    align-items: center;
    justify-content: start;
    gap: 8px;
  }
  .radioGroupItem input {
    cursor: pointer;
    accent-color: var(--primaryColor);
  }

  .radioGroupItem label {
    white-space: pre-wrap;
    word-break: break-word;
    color: var(--foregroundColor);
    font-family: var(--bodyFont);
    font-size: var(--body);
  }

  .radioGroupItem input:disabled {
    cursor: not-allowed;
  }
  .radioGroupItem .disabled {
    color: var(--mutedColor);
  }
</style>

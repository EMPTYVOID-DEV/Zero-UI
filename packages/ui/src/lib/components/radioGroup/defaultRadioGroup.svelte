<script>
  import { createEventDispatcher } from "svelte";
  import RadioItem from "./radioItem.svelte";

  

  
  
  /**
   * @typedef {Object} Props
   * @property {number} [defaultChoice]
   * @property {boolean} [disabled]
   * @property {{ text: string; description?: string }[]} [radioGroup]
   */

  /** @type {Props} */
  let { defaultChoice = -1, disabled = false, radioGroup = [] } = $props();
  /**
   * creating new list of group items with the checked property
   *  also setting the checked property of the item with the index matching the defaultChoice
   */
  const enhancedGroup = $state(radioGroup.map((el, index) => {
    return {
      ...el,
      checked: index === defaultChoice,
    };
  }));

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

<div class="radioGroup" class:disabled>
  {#each enhancedGroup as radioItem, index}
    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <RadioItem
      {disabled}
      {radioItem}
      on:click={() => toggleRadioGroup(index)}
    />
  {/each}
</div>

<style>
  .radioGroup {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }
</style>

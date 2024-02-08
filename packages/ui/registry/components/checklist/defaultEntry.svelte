<script>
  import Checked from "../../icons/checked.svelte";
  import Unchecked from "../../icons/unChecked.svelte";
  /**@type {import("../../types").checklist} this a list of objects containing items and whether they are checked or not*/
  export let checklist = [];
</script>

<div class="checkList">
  {#each checklist as item}
    <div class="checkListItem">
      {#if item.checked}
        <svelte:component this={Checked} />
      {:else}
        <svelte:component this={Unchecked} />
      {/if}
      <span style:text-decoration={item.checked ? "line-through" : "none"}
        >{item.text}</span
      >
    </div>
  {/each}
</div>

<style>
  .checkList {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  .checkList .checkListItem {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, auto);
    align-items: center;
    justify-content: start;
    gap: 10px;
  }
  .checkList span {
    white-space: pre-wrap;
    word-break: break-word;
    color: var(--foregroundColor);
    font-family: var(--bodyFont);
    font-size: var(--body);
    line-height: var(--lbody);
  }
</style>

<script>
  import PlusIcon from "../../icons/plusIcon.svelte";
  import { createEventDispatcher } from "svelte";
  import Files from "./files.svelte";

  /**@type {string}*/
  export let description;
  /**@type {File[]}*/
  export let files;

  const dispatcher = createEventDispatcher();
  /**
   *@param {DragEvent} e
   */
  function dropHandler(e) {
    // Prevent file from being opened
    e.preventDefault();
    const dropFiles = e.dataTransfer?.files;
    if (dropFiles) {
      dispatcher("drop", {
        dropFiles,
      });
    }
  }

  /**
   * @param {Event} e
   */
  function dragOver(e) {
    // Prevent file from being opened
    e.preventDefault();
  }
</script>

<div class="uploadUi">
  <label for="upload" on:dragover={dragOver} on:drop={dropHandler}>
    <PlusIcon />
    <span
      >Drop your files here , or <span class="browsing">click to browse</span
      ></span
    >
    <span class="description">{description}</span>
  </label>
  <Files {files} on:remove />
</div>

<style>
  .uploadUi {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  label {
    box-sizing: border-box;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    background-color: transparent;
    border: 2px dashed var(--foregroundColor);
    border-radius: var(--border-radius);
    padding-inline: 0.25rem;
    padding-block: 1.5rem;
    cursor: pointer;
  }

  .browsing {
    color: var(--primaryColor);
  }

  .description {
    text-align: center;
    color: color-mix(in srgb, var(--mutedColor) 70%, transparent 30%);
  }
  .description:empty {
    display: none;
  }
  span {
    font-size: var(--body);
    font-family: var(--bodyFont);
    color: var(--foregroundColor);
  }
</style>

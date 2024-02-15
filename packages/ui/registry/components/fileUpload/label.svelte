<script>
  import { fade } from "svelte/transition";
  import Mime from "mime-types";
  import CloseIcon from "../../icons/closeIcon.svelte";
  import PlusIcon from "../../icons/plusIcon.svelte";
  import { createEventDispatcher } from "svelte";
  import { quintOut } from "svelte/easing";

  /**@type {string}*/
  export let description;
  /**@type {File[]}*/
  export let files;

  const dispatcher = createEventDispatcher();

  /**@function formatFileSize returns the file size str in bytes,kilos,mega depending on its value*/
  /**@param {number} fileSizeBytes*/
  function formatFileSize(fileSizeBytes) {
    if (fileSizeBytes < 1024) {
      return fileSizeBytes + " B";
    } else if (fileSizeBytes < 1024 * 1024) {
      let sizeKB = fileSizeBytes / 1024;
      return sizeKB.toFixed(2) + " KB";
    } else {
      let sizeMB = fileSizeBytes / (1024 * 1024);
      return sizeMB.toFixed(2) + " MB";
    }
  }
  /**@function removeFile this function fires an event to remove a file with specific index*/
  /**@param {number} fileIndex*/
  function removeFile(fileIndex) {
    dispatcher("remove", {
      fileIndex,
    });
  }
  /**@param {DragEvent} e*/
  function dropHandler(e) {
    // Prevent file from being opened)
    e.preventDefault();
    const dropFiles = e.dataTransfer?.files;
    if (dropFiles) {
      dispatcher("drop", {
        dropFiles,
      });
    }
  }

  /**@param {Event} e*/
  function dragOver(e) {
    // Prevent file from being opened)
    e.preventDefault();
  }
</script>

<div class="uploadUi">
  <label
    for="upload"
    class="label"
    on:dragover={dragOver}
    on:drop={dropHandler}
  >
    <PlusIcon />
    <span
      >Drop your files here , or <span class="browsing">click to browse</span
      ></span
    >
  </label>
  <span class="description">{description}</span>
  <div class="files">
    {#each files as file, index (file.lastModified)}
      <div class="file" transition:fade={{ easing: quintOut }}>
        <span class="type">.{Mime.extension(file.type) || "file"}</span>
        <span class="info">
          <span>{file.name.substring(0, 20)}</span>
          <span>{formatFileSize(file.size)}</span>
        </span>
        <button
          class="remove"
          on:click={() => {
            removeFile(index);
          }}><CloseIcon /></button
        >
      </div>
    {/each}
  </div>
</div>

<style>
  .uploadUi {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: var(--gap);
  }
  span {
    font-size: var(--body);
    font-family: var(--bodyFont);
    color: var(--foregroundColor);
  }
  .label {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: var(--gap);
    background-color: transparent;
    border: 2px dashed var(--foregroundColor);
    border-radius: var(--border-radius);
    padding-inline: 4px;
    padding-block: 20px;
    cursor: pointer;
  }

  .browsing {
    color: var(--primaryColor);
  }

  .description {
    color: color-mix(in srgb, var(--foregroundColor) 70%, transparent 30%);
  }
  .files {
    display: flex;
    flex-direction: column;
    gap: calc(var(--gap) / 2);
  }
  .file {
    width: 95%;
    display: flex;
    align-items: center;
    gap: var(--gap);
  }

  .type {
    font-weight: 600;
    width: 2.5rem;
    aspect-ratio: 1/1;
    border-radius: 4px;
    color: color-mix(in srgb, var(--primaryColor) 70%, transparent 30%);
  }
  .info {
    display: flex;
    flex-direction: column;
    gap: calc(var(--gap) / 2);
    padding: 4px;
  }
  .info span:first-child {
    word-break: break-word;
  }
  .info span:last-child {
    color: color-mix(in srgb, var(--primaryColor) 70%, transparent 30%);
  }
  .remove {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.4rem;
    aspect-ratio: 1/1;
    cursor: pointer;
    outline: none;
    border: none;
    border-radius: 4px;
    margin-left: auto;
    background-color: color-mix(
      in srgb,
      var(--foregroundColor) 20%,
      transparent 80%
    );
    --icon: var(--foregroundColor);
  }
</style>

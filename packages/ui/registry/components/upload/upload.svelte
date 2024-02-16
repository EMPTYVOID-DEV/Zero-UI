<script>
  import { createEventDispatcher } from "svelte";
  import Label from "./label.svelte";

  /**@type {string}*/
  export let description = "";
  /**@type {string}*/
  export let acceptedFiles = "*";

  const dispatcher = createEventDispatcher();
  /**@type {File[]} */
  let files = [];

  /**
   * @function checkType checks the file type for the component
   * @param {string} type this is the file type
   * @returns {boolean} true:the type is valid , false:the type is not valid
   */
  function checkType(type) {
    const typeArray = type.split("/");
    if (acceptedFiles == "*") return true;
    for (let v of acceptedFiles.split(",")) {
      let testType = v.trim().split("/");
      if (
        testType[0] == typeArray[0] &&
        (testType[1] == "*" || testType[1] == typeArray[1])
      )
        return true;
    }
    return false;
  }
  /**
   * @function This is a function that handles the addition of a valid file
   * @param {FileList} selectedFiles this is the list of the selected files after a drop or browse addition
   */
  function addFiles(selectedFiles) {
    if (selectedFiles)
      for (let i = 0; i < selectedFiles.length; i++) {
        if (checkType(selectedFiles[i].type))
          files = [...files, selectedFiles[i]];
      }
    dispatcher("change", {
      files,
    });
  }

  /**
   * @function remove this will remove a file using the fileIndex
   * @param {{ detail: { fileIndex: number; }; }} e this is an event fired by the label component each time the user removes a file
   */
  function remove(e) {
    files = files.filter((el, idx) => idx != e.detail.fileIndex);
    dispatcher("change", {
      files,
    });
  }
</script>

<div class="fileUpload">
  <input
    id="upload"
    type="file"
    accept={acceptedFiles}
    on:change={(e) => {
      let selectedFiles = e.currentTarget.files;
      if (selectedFiles) addFiles(selectedFiles);
    }}
  />
  <Label
    {description}
    {files}
    on:remove={remove}
    on:drop={(e) => {
      addFiles(e.detail.dropFiles);
    }}
  />
</div>

<style>
  .fileUpload {
    width: var(--width, 100%);
  }
  .fileUpload input {
    display: none;
  }
</style>

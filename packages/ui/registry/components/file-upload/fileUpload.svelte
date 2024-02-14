<script>
  import Label from "./label.svelte";

  /**@type {string}*/
  export let description = "";
  /**@type {string}*/
  export let acceptedFiles = "*";
  /**@type {File[]} */
  export let files = [];

  /**@function checkType checks the file type for the component*/
  /**@param {string} type*/
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
  /**@function This is a function that handles the addition of a valid file*/
  /**@param {FileList} selectedFiles*/
  function addFiles(selectedFiles) {
    if (selectedFiles)
      for (let i = 0; i < selectedFiles.length; i++) {
        if (checkType(selectedFiles[i].type))
          files = [...files, selectedFiles[i]];
      }
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
    on:remove={(e) => {
      files = files.filter((el, idx) => idx != e.detail.fileIndex);
    }}
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

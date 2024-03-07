<script>
  import { createEventDispatcher } from "svelte";
  import Label from "./label.svelte";

  /**@type {number} file size limit in kilos , -1 means any size is accepted*/
  export let sizeLimit = -1;

  /**@type {number} This will limit number of files the user can upload , -1 means there is no limits*/
  export let numberLimit = -1;

  /**@type {string}*/
  export let description = "";
  /**@type {string}
   * This is the mime type for your accepted files
   */
  export let acceptedFiles = "*";

  const dispatcher = createEventDispatcher();
  /**@type {File[]} */
  let files = [];

  /**
   * @function this function checks the size limit
   * @param {number} sizeInBytes
   * @returns {boolean}
   */
  function checkSize(sizeInBytes) {
    const sizeInKilos = sizeInBytes / 1024;
    if (sizeLimit == -1) return false;
    if (sizeInKilos < sizeLimit) return false;
    return true;
  }

  /**
   * @function This function checks whether we reach the files number limit
   * @returns {boolean}
   */
  function reachLimit() {
    if (numberLimit == -1) return false;
    else if (files.length < numberLimit) return false;
    return true;
  }

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
   * @function addFiles is a function that handles the addition of a valid file
   * @param {FileList} selectedFiles this is the list of the selected files after a drop or browse addition
   */
  function addFiles(selectedFiles) {
    if (!selectedFiles) return;
    for (let i = 0; i < selectedFiles.length; i++) {
      if (
        checkType(selectedFiles[i].type) &&
        !reachLimit() &&
        !checkSize(selectedFiles[i].size)
      )
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

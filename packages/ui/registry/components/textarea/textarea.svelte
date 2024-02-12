<script>
  /**@type {string}*/
  export let name = "";
  /**@type {string}*/
  export let value = "";
  /**@type {boolean}*/
  export let disabled = false;
  /**@type {string}*/
  export let label = "";
  /**@function This function  make the textarea to auto resize to fit content*/
  /**@param {HTMLElement} node*/
  function setAutoResize(node) {}
</script>

<div class="textarea">
  <label for={name}>{label}</label>
  <textarea {disabled} {value} {name} on:input use:setAutoResize />
</div>

<style>
  .textarea {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: var(--gap);
  }
  .textarea label {
    font-family: var(--headerFont);
    font-size: var(--body);
    font-weight: 600;
    color: var(--foregroundColor);
  }
  .textarea textarea {
    outline: none;
    resize: none;
    width: 100% !important;
    aspect-ratio: 5/2;
    padding-left: 10px;
    overflow: auto;
    border: 2px solid var(--foregroundColor);
    color: var(--foregroundColor);
    font-family: var(--headerFont);
    font-size: var(--body);
    border-radius: var(--border-radius);
  }
  .textarea textarea:focus {
    border-color: var(--primaryColor);
  }
  .textarea :global(::-webkit-scrollbar) {
    width: 0.5rem;
  }
  .textarea :global(::-webkit-scrollbar-track) {
    border-radius: 0;
    background: color-mix(in srgb, var(--foregroundColor) 40%, transparent 60%);
  }

  .textarea :global(::-webkit-scrollbar-thumb) {
    border-radius: 4px;
    background: color-mix(in srgb, var(--primaryColor) 60%, transparent 40%);
  }
</style>

<script>
  /**@type {string}*/
  export let name = "";
  /**@type {string}*/
  export let value = "";
  /**@type {boolean}*/
  export let disabled = false;
  /**@type {string}*/
  export let label = "";
</script>

<div class="textarea">
  <label for="texarea">{label}</label>
  <textarea id="texarea" {disabled} {value} {name} on:input />
</div>

<style>
  .textarea {
    display: flex;
    flex-direction: column;
    gap: var(--gap);
  }
  .textarea label {
    font-family: var(--headerFont);
    font-size: var(--body);
    font-weight: 500;
    color: var(--foregroundColor);
  }
  .textarea textarea {
    outline: none;
    resize: none;
    width: var(--width, 100%);
    height: var(--height, 400px);
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

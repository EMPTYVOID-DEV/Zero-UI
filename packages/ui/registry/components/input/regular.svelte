<script>
  /**@type {string}*/
  export let name;
  /**@type {string}*/
  export let value = "";
  /**@type {string}*/
  export let label = "";
  /**@type {"text"|"password"|"email"|"number"}*/
  export let inputType = "text";
  /**@type {boolean}*/
  export let disabled = false;
</script>

<div class="input-container">
  <label class="header" for={name}>{label}</label>
  <input type={inputType} {disabled} {value} {name} class="input" on:input />
</div>

<style>
  .input-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: var(--gap);
  }

  .input-container .header {
    font-family: var(--headerFont);
    font-size: var(--body);
    font-weight: 600;
    color: var(--foregroundColor);
  }

  .input {
    box-sizing: border-box;
    width: 100%;
    padding-left: 8px;
    padding-block: 8px;
    font-size: var(--body);
    color: var(--foregroundColor);
    background-color: transparent;
    border-radius: var(--border-radius);
    border: 2px solid var(--foregroundColor);
    outline: none;
  }
  .input:focus {
    background-color: color-mix(
      in srgb,
      var(--foregroundColor) 20%,
      transparent 80%
    );
  }
  .input[type="number"]::-webkit-outer-spin-button,
  .input::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  .input:disabled {
    border: 2px solid var(--mutedColor);
    color: var(--mutedColor);
  }
</style>

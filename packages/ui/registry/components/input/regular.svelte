<script>
  /**@type {string}*/
  export let value = "";
  /**@type {string}*/
  export let label = "";
  /**@type {string}*/
  export let placeholder = "";
  /**@type {"primary"|"danger"|"confirm"}*/
  export let type = "primary";
  /**@type {"text"|"password"|"email"|"number"}*/
  export let inputType = "text";
</script>

<div class="input-container {type}">
  <label class="header" for="input">{label}</label>
  <input type={inputType} {value} {placeholder} class="input" on:input />
</div>

<style>
  .passive {
    --main-color: var(--foregroundColor);
  }
  .primary {
    --main-color: var(--primaryColor);
  }
  .danger {
    --main-color: var(--dangerColor);
  }
  .confirm {
    --main-color: var(--confirmColor);
  }
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
    border: 2px solid var(--main-color);
    outline: none;
  }
  .input:focus {
    background-color: color-mix(
      in srgb,
      var(--main-color) 20%,
      transparent 80%
    );
  }
  .input[type="number"]::-webkit-outer-spin-button,
  .input::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
</style>

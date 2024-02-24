<script>
  import CloseIcon from "../../icons/closeIcon.svelte";
  /**@type {string}*/
  export let name = "";
  /**@type {string}*/
  export let value = "";
  /**@type {string}*/
  export let label = "";
  /**@type {"text"|"password"|"email"|"number"}*/
  export let inputType = "text";
  /**@type {boolean}*/
  export let disabled = false;
  /**@type {import("../../types").checkFunction}*/
  export let checkFunction;
  /**@type {{errorMsg:string,state:"idle"|"valid"|"invalid"}}*/
  let status = {
    state: "idle",
    errorMsg: "",
  };
</script>

<div class="input-container {status.state}">
  <label for="input">{label}</label>
  <input
    id="input"
    {name}
    {disabled}
    {value}
    type={inputType}
    class="input"
    on:input={(e) => {
      status = checkFunction(e.currentTarget.value);
    }}
  />
  {#if status.state == "invalid"}
    <div class="error">
      <CloseIcon />
      <span>{status.errorMsg}</span>
    </div>
  {/if}
</div>

<style>
  .idle {
    --main-color: var(--primaryColor);
  }
  .valid {
    --main-color: var(--successColor);
  }

  .invalid {
    --icon: var(--dangerColor);
    --main-color: var(--dangerColor);
  }

  .input-container {
    width: var(--width, 80%);
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 8px;
  }

  .input-container label {
    font-family: var(--headerFont);
    font-size: var(--body);
    font-weight: 600;
    color: var(--foregroundColor);
  }
  .input-container label:empty {
    display: none;
  }

  .input {
    box-sizing: border-box;
    width: 100%;
    padding-left: 8px;
    padding-block: 8px;
    font-size: var(--body);
    font-family: var(--bodyFont);
    color: var(--foregroundColor);
    background-color: transparent;
    border-radius: var(--border-radius);
    border: 2px solid var(--foregroundColor);
    outline: none;
  }
  .input:focus {
    border-color: var(--main-color);
    background-color: color-mix(
      in srgb,
      var(--main-color) 30%,
      transparent 70%
    );
  }
  .input[type="number"]::-webkit-outer-spin-button,
  .input::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  .input:disabled {
    border-color: (--mutedColor);
    color: var(--mutedColor);
  }

  .error {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    gap: 4px;
  }
  .error span {
    font-size: var(--small);
    font-family: var(--bodyFont);
    color: var(--main-color);
    text-transform: capitalize;
  }
</style>

<script>
  import MoonIcon from "../../icons/moonIcon.svelte";
  import SunIcon from "../../icons/sunIcon.svelte";
  import ComputerIcon from "../../icons/computerIcon.svelte";
  import { createEventDispatcher } from "svelte";
  import { fade, fly } from "svelte/transition";
  import { quadIn } from "svelte/easing";

  /**@type {"dark"|"light"|"system"}*/
  export let active = "dark";
  const dispatcher = createEventDispatcher();
  let show = false;
</script>

<div class="themeToggle">
  <button class="show" on:click={() => (show = !show)}>
    <MoonIcon />
  </button>
  {#if show}
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div
      class="options"
      transition:fly={{ duration: 800, easing: quadIn }}
      on:click={() => {
        show = false;
        dispatcher("change", {
          theme: active,
        });
      }}
    >
      <button
        class:active={active == "dark"}
        class="option"
        on:click={() => {
          active = "dark";
        }}
      >
        <MoonIcon />
        <span>Dark</span>
      </button>
      <button
        class:active={active == "light"}
        class="option"
        on:click={() => {
          active = "light";
        }}
      >
        <SunIcon />
        <span>Light</span>
      </button>
      <button
        class:active={active == "system"}
        class="option"
        on:click={() => {
          active = "system";
        }}
      >
        <ComputerIcon />
        <span>System</span>
      </button>
    </div>
  {/if}
</div>

<style>
  .themeToggle {
    position: relative;
    width: fit-content;
  }
  .themeToggle :global(svg) {
    width: 20px;
    height: 20px;
  }
  .show {
    outline: none;
    border: none;
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  .options {
    position: absolute;
    top: 30px;
    width: 7rem;
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 4px;
    background-color: var(--backgroundColor);
    border: 2px solid var(--primaryColor);
    border-radius: var(--border-radius);
    z-index: 99;
  }
  .option {
    width: 100%;
    display: flex;
    align-items: center;
    background-color: transparent;
    cursor: pointer;
    border: none;
    outline: none;
    gap: 8px;
    padding: 4px;
    border-radius: inherit;
    --icon: var(--foregroundColor);
  }
  .option span {
    color: var(--foregroundColor);
    font-size: var(--small);
    font-family: var(--bodyFont);
  }
  .option:hover {
    background-color: color-mix(
      in srgb,
      var(--primaryColor) 50%,
      transparent 50%
    );
  }
  .active {
    --icon: var(--primaryColor);
  }
  .active span {
    font-weight: 600;
    color: var(--primaryColor);
  }
</style>

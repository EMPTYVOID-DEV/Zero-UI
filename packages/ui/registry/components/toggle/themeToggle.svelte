<script>
  import MoonIcon from "../../icons/moonIcon.svelte";
  import SunIcon from "../../icons/sunIcon.svelte";
  import ComputerIcon from "../../icons/computerIcon.svelte";
  import { createEventDispatcher } from "svelte";
  import { slide } from "svelte/transition";
  import { quadInOut } from "svelte/easing";

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
      transition:slide={{ duration: 400, easing: quadInOut }}
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
    width: min-content;
  }

  .show {
    outline: none;
    border: none;
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    --icon: var(--foregroundColor);
  }
  .show:hover {
    --icon: var(--primaryColor);
  }

  .options {
    position: absolute;
    top: var(--top, 30px);
    left: var(--left, 0);
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding: 0.25rem;
    background-color: var(--backgroundColor);
    border: 2px solid var(--primaryColor);
    border-radius: var(--border-radius);
    z-index: 99;
  }
  .options :global(svg) {
    width: 1.25rem;
    height: 1.25rem;
  }
  .option {
    width: 6rem;
    display: flex;
    align-items: center;
    background-color: transparent;
    cursor: pointer;
    border: none;
    outline: none;
    gap: 0.5rem;
    padding-block: 0.25rem;
    padding-left: 0.25rem;
    border-radius: inherit;
    --icon: var(--mutedColor);
  }
  .option span {
    color: var(--mutedColor);
    font-size: var(--small);
    font-family: var(--bodyFont);
  }
  .option:hover {
    background-color: color-mix(
      in srgb,
      var(--primaryColor) 60%,
      transparent 40%
    );
  }
  .active {
    --icon: var(--foregroundColor);
  }
  .active span {
    font-weight: 600;
    color: var(--foregroundColor);
  }
</style>

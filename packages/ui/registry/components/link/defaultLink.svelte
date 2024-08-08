<script>
  /**@type {string}*/
  export let text;
  /**@type {string}*/
  export let href;
  /**@type {boolean}*/
  export let isBlank = false;
  /**@type {"primary"|"secondary"}*/
  export let type = "primary";
  /**@type {import("../../types").iconComponent|null}*/
  export let icon = null;
  /**@type {boolean}*/
  export let active = false;
</script>

<a
  class:active
  class="link {type}"
  {href}
  target={isBlank ? "_blank" : ""}
  on:click
>
  <svelte:component this={icon} />
  <span>{text}</span>
</a>

<style>
  .link {
    display: inline-flex;
    align-items: center;
    gap: 0.25rem;
    cursor: pointer;
    text-decoration: none;
    padding-bottom: 2px;
    --text: var(--foregroundColor);
    --icon: var(--foregroundColor);
  }
  .link span {
    color: var(--text);
    font-family: var(--bodyFont);
    font-size: var(--body);
    font-weight: 600;
  }
  .link:hover {
    --text: var(--primaryColor);
    --icon: var(--primaryColor);
  }

  .active {
    --text: var(--primaryColor);
    --icon: var(--primaryColor);
    border-bottom: 3px solid var(--primaryColor);
  }
  .link span:empty {
    display: none;
  }

  @media screen and (width<768px) {
    .active {
      border: 0;
    }
  }
</style>

<script>
  /**@type {string}*/
  export let text;
  /**@type {string}*/
  export let href;
  /**@type {boolean}*/
  export let isBlank = true;
  /**@type {"primary"|"secondary"}*/
  export let type = "primary";
  /**@type {import("../../types").iconComponent|null} icon is optional for the button */
  export let icon = null;
</script>

<a class="link {type}" {href} target={isBlank ? "_blank" : "_self"}>
  <svelte:component this={icon} />
  <span>{text}</span>
</a>

<style>
  .primary {
    --icon: var(--primaryColor);
    --fg: var(--primaryColor);
  }
  .secondary {
    --icon: var(--secondaryColor);
    --fg: var(--secondaryColor);
  }
  .link {
    display: inline-flex;
    align-items: center;
    gap: var(--gap);
    cursor: pointer;
    text-decoration: none;
  }
  .link span {
    color: var(--fg);
    font-family: var(--bodyFont);
    font-size: var(--body);
    font-weight: var(--font-weight, 500);
  }
</style>

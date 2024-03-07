<script>
  /**@type {string}*/
  export let text;
  /**@type {string}*/
  export let href;
  /**@type {boolean}*/
  export let isBlank = true;
  /**@type {"primary"|"secondary"}*/
  export let type = "primary";
  /**@type {import("../../types").iconComponent|null}*/
  export let icon = null;
</script>

<a class="link {type}" {href} target={isBlank ? "_blank" : "_self"}>
  <svelte:component this={icon} />
  <span>{text}</span>
</a>

<style>
  .primary {
    --main-color: var(--primaryColor);
  }
  .secondary {
    --main-color: var(--secondaryColor);
  }
  .link {
    display: inline-flex;
    align-items: center;
    gap: 0.25rem;
    cursor: pointer;
    text-decoration: none;
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
    --text: var(--main-color);
    --icon: var(--main-color);
  }

  .link span:empty {
    display: none;
  }
</style>

<script>
  import LinkIcon from "../../icons/linkIcon.svelte";
  /**@type {string}*/
  export let text;
  /**@type {string}*/
  export let href;
  /**@type {boolean}*/
  export let isBlank = true;
  /**@type {"passive"|"primary"|"secondary"}*/
  export let type = "primary";
</script>

<a class="link {type}" {href} target={isBlank ? "_blank" : "_self"}>
  <span>{text}</span>
  <LinkIcon />
</a>

<style>
  .passive {
    --icon: var(--foregroundColor);
    --fg: var(--foregroundColor);
  }
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
    gap: 2px;
    cursor: pointer;
    text-decoration: none;
  }
  .link span {
    color: var(--fg);
    font-family: var(--bodyFont);
    font-size: var(--body);
    font-weight: 500;
  }
</style>

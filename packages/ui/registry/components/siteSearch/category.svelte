<script>
  import Section from "./section.svelte";
  /**@type {import("../../types").category}*/
  export let category;
</script>

<div class="category">
  <span>{category.categoryName}</span>
  <div class="sections">
    {#each category.sections as section}
      <Section {section} />
    {/each}
  </div>
</div>

<style>
  .category {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding: 0.5rem;
    border-bottom: 1px solid
      color-mix(in srgb, var(--mutedColor) 40%, transparent 60%);
  }
  .category:last-child {
    border: 0;
  }
  .category span {
    color: var(--primaryColor);
    font-size: var(--small);
    font-family: var(--bodyFont);
    font-weight: 600;
  }
  .sections {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
</style>

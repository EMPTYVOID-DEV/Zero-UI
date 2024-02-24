<script>
  import HashIcon from "../../icons/hashIcon.svelte";
  import SubMenuIcon from "../../icons/subMenuIcon.svelte";
  import FileIcon from "../../icons/fileIcon.svelte";
  /**@type {import("../../types").section}*/
  export let section;
</script>

<section class="section">
  <a class="link" href={section.link}>
    <FileIcon />
    <span>{section.sectionName}</span>
  </a>
  {#if section.subSections}
    <div class="subSections">
      {#each section.subSections as subSection}
        <a href={subSection.link} class="link">
          {#if subSection.isHeader}
            <HashIcon />
          {:else}
            <SubMenuIcon />
          {/if}
          <span>{subSection.subSectionName}</span>
        </a>
      {/each}
    </div>
  {/if}
</section>

<style>
  .section,
  .subSections {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  .link {
    display: flex;
    align-items: center;
    gap: 4px;
    padding: 8px;
    border-radius: 4px;
    text-decoration: none;
  }
  .link :global(svg) {
    width: 20px;
    height: 20px;
    --icon: var(--foregroundColor);
  }
  .link span {
    color: var(--foregroundColor);
    font-size: var(--small);
    font-family: var(--bodyFont);
  }
  .link:hover {
    background-color: color-mix(
      in srgb,
      var(--foregroundColor) 30%,
      transparent 70%
    );
  }
  .subSections {
    margin-left: 12px;
    padding-left: 8px;
    border-left: 2px solid var(--foregroundColor);
  }
</style>

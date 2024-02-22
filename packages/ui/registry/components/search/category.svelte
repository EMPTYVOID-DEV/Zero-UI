<script>
  import CloseIcon from "../../icons/closeIcon.svelte";
  import InfoIcon from "../../icons/infoIcon.svelte";
  import HashIcon from "../../icons/hashIcon.svelte";

  /**@type {{category:string,sections:{link:string,name:string,header?:string}[]}}*/
  export let category;
</script>

<div class="category">
  <span>{category.category}</span>
  <div class="sections">
    {#each category.sections as section}
      <a class="section" href={section.link}>
        {#if section.header}
          <HashIcon />
          <div class="header">
            <span>{section.name}</span>
            <span>{section.header}</span>
          </div>
        {:else}
          <InfoIcon />
          <span>{section.name}</span>
        {/if}
        <CloseIcon />
      </a>
    {/each}
  </div>
</div>

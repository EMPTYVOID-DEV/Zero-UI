<script>
  import AccordianItem from "./accordianItem.svelte";

  /**@type {{title:string,description:string}[]}*/
  export let accordianList = [];
</script>

<div class="accordian">
  {#each accordianList as item}
    <AccordianItem title={item.title} description={item.description} />
  {/each}
</div>

<style>
  .accordian {
    width: var(--width, 100%);
    display: flex;
    flex-direction: column;
    gap: var(--gap);
  }
</style>

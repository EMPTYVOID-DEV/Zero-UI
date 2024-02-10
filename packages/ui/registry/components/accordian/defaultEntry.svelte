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
    display: flex;
    flex-direction: column;
  }
</style>

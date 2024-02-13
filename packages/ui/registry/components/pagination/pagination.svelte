<script>
  /**@type {number}*/
  export let pagesNumber = 2;
</script>

<div class="pagination">
  {#each Array(pagesNumber) as page}
    <span class="page">{page}</span>
  {/each}
</div>

<script>
  import CloseIcon from "../../icons/closeIcon.svelte";
  import SearchIcon from "../../icons/searchIcon.svelte";
  import Dialog from "../dialog/dialog.svelte";
  import SearchInput from "./searchInput.svelte";

  /**@type {{category:string,sections:{link:string,name:string,header?:string}[]}[]}*/
  export let sections = [];
</script>

<Dialog>
  <svelte:fragment slot="trigger" let:open>
    <SearchInput
      on:click={() => open()}
      on:keyup={(e) => {
        if (e.ctrlKey && e.shiftKey && e.key === "") open();
      }}
    />
  </svelte:fragment>
  <div class="searchModel">
    <div class="searchBar">
      <SearchIcon />
      <input type="text" placeholder="Search..." />
      <CloseIcon />
    </div>
  </div>
</Dialog>

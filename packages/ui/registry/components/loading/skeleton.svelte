<script>
  /**@type {string}*/
  export let width = "50px";
  /**@type {string}*/
  export let height = "50px";
  /**@type {string}*/
  export let radius = "50%";
</script>

<div class="skeleton" style:width style:height style:border-radius={radius} />

<style>
  .skeleton {
    background-color: color-mix(
      in srgb,
      var(--primaryColor) 50%,
      transparent 50%
    );
    animation: fade 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  }
  @keyframes fade {
    50% {
      opacity: 0.5;
    }
  }
</style>

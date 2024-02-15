<div class="skeleton" />

<style>
  .skeleton {
    width: var(--width, 50px);
    height: var(--height, 50px);
    border-radius: var(--border-radius);

    background-color: color-mix(
      in srgb,
      var(--foregroundColor) 50%,
      transparent 50%
    );
    animation: fade 2.2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  }
  @keyframes fade {
    50% {
      opacity: 0.45;
    }
  }
</style>

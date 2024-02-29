<div class="skeleton" />

<style>
  .skeleton {
    width: var(--width, 3rem);
    height: var(--height, 3rem);
    border-radius: var(--border-radius);
    background-color: color-mix(
      in srgb,
      var(--mutedColor) 70%,
      transparent 30%
    );
    animation: fade 2.2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  }
  @keyframes fade {
    50% {
      opacity: 0.38;
    }
  }
</style>

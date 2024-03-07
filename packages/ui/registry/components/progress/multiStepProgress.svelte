<script>
  /**@type {number}*/
  export let numberOfSteps = 0;
  /**@type {number}*/
  export let stepsPassed = 0;
  /**@type {string}*/
  export let currentStepName = "";
</script>

<div class="multiStepProgress">
  <span class="currentStep">{currentStepName}</span>
  <div class="steps">
    {#each Array(numberOfSteps) as step, index}
      <span class="step" class:passed={index < stepsPassed} />
    {/each}
  </div>
</div>

<style>
  .multiStepProgress {
    width: var(--width, 100%);
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 0.5rem;
  }
  .currentStep {
    font-size: var(--h4);
    font-family: var(--headerFont);
    font-weight: 600;
    color: var(--foregroundColor);
    text-transform: capitalize;
  }
  .currentStep:empty {
    display: none;
  }
  .steps {
    width: 100%;
    display: flex;
    gap: 0.25rem;
  }
  .step {
    flex-grow: 1;
    height: 0.5rem;
    background-color: color-mix(
      in srgb,
      var(--mutedColor) 40%,
      transparent 60%
    );
    border-radius: 0.5rem;
  }
  .passed {
    background-color: var(--primaryColor);
  }
</style>

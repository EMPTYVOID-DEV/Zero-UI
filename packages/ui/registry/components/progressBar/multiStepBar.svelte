<script>
  /**@type {number} This is the number of steps*/
  export let numberOfSteps = 0;
  /**@type {number} This is the number of passed steps*/
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
    gap: var(--gap);
  }
  .currentStep {
    font-size: var(--h4);
    font-family: var(--headerFont);
    font-weight: 500;
    color: var(--primaryColor);
  }
  .steps {
    width: 100%;
    display: flex;
    gap: var(--gap);
  }
  .step {
    flex-grow: 1;
    height: 0.5rem;
    background-color: color-mix(
      in srgb,
      var(--primaryColor) 40%,
      transparent 60%
    );
    border-radius: 8px;
  }
  .passed {
    background-color: var(--primaryColor);
  }
</style>

<script>
  /**@type {number} This is the number of steps*/
  export let numberOfSteps = 0;
  /**@type {number} This is the number of passed steps*/
  export let stepsPassed = 0;
  /** @type {"passive" | "primary"} Dictates the color based on the type */
  export let type = "primary";
  /**@type {string}*/
  export let currentStepName = "";
</script>

<div class="multiStepProgress {type}">
  <span class="currentStep">{currentStepName}</span>
  <div class="steps">
    {#each Array(numberOfSteps) as step, index}
      <span class="step" class:passed={index < stepsPassed} />
    {/each}
  </div>
</div>

<style>
  .passive {
    --main-color: var(--foregroundColor);
    --icon: var(--foregroundColor);
  }

  .primary {
    --main-color: var(--primaryColor);
    --icon: var(--primaryColor);
  }
  .multiStepProgress {
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: var(--gap);
  }
  .currentStep {
    font-size: var(--h4);
    font-family: var(--headerFont);
    font-weight: bold;
    color: var(--main-color);
  }
  .steps {
    width: 100%;
    display: flex;
    gap: var(--gap);
  }
  .step {
    flex-grow: 1;
    height: 0.5rem;
    background-color: var(--mutedColor);
    border-radius: 8px;
  }
  .passed {
    background-color: var(--main-color);
  }
</style>

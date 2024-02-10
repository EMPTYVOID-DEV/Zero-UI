<script>
  import PercentageIcon from "../../icons/percentage.svelte";

  /** @type {number} This is the progress value */
  export let progress = 0;

  /** @type {number} maxValue for the progress */
  export let maxValue = 100;

  /** @type {"passive" | "primary"} Dictates the color based on the type */
  export let type = "primary";

  /** @type {boolean} Whether we show the progress meter*/
  export let showMeter = true;

  /**@function This function calculate the processedProgress relative to 100% using the maxValue and the current progress
   * It also prevent overflow if the progress is bigger than maxValue  the processedProgress is set to 100
   * @param {number} progress
   */
  function calculateRelativeProgress(progress) {
    let limitedProgress = progress > maxValue ? maxValue : progress;
    let relativeProgress = (limitedProgress * 100) / maxValue;
    return Math.floor(relativeProgress);
  }
  $: processedProgress = calculateRelativeProgress(progress);
</script>

<div class={`progressBar ${type}`}>
  <span class="progressWrapper">
    <span class="progressMeter" style:width={`${processedProgress}%`}></span>
  </span>
  {#if showMeter}
    <div class="progressCounter">
      <span>{processedProgress}</span>
      <PercentageIcon />
    </div>
  {/if}
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

  .progressBar {
    display: flex;
    align-items: center;
    gap: var(--gap);
    width: 100%;
  }

  .progressWrapper {
    display: flex;
    flex-grow: 1;
    border: 2px solid var(--main-color);
    border-radius: 24px;
    overflow: hidden;
    height: 0.4rem;
  }

  .progressMeter {
    background-color: var(--main-color);
    height: 100%;
  }

  .progressCounter {
    display: flex;
    align-items: center;
  }

  .progressCounter span {
    width: 2rem;
    font-size: var(--small);
    font-family: var(--bodyFont);
    color: var(--main-color);
  }
</style>

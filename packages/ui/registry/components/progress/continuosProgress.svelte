<script>
  import PercentageIcon from "../../icons/percentageIcon.svelte";

  /** @type {number} This is the progress value */
  export let progress = 0;

  /** @type {number} maxValue for the progress */
  export let maxValue = 100;

  /** @type {boolean} Whether we show the progress meter or not*/
  export let showMeter = true;

  /**
   * @function calculateRelativeProgress
   * @param {number} progress we need the progress as param to make the svelte compiler re-run the reactive declarition
   * @returns {number} the return value is a perecentage progress from 0% to 100%
   */
  function calculateRelativeProgress(progress) {
    let limitedProgress = progress > maxValue ? maxValue : progress;
    let perecentageProgress = (limitedProgress * 100) / maxValue;
    return Math.floor(perecentageProgress);
  }
  $: perecentageProgress = calculateRelativeProgress(progress);
</script>

<div class="progressBar">
  <span class="progressWrapper">
    <span class="progressMeter" style:width={`${perecentageProgress}%`}></span>
  </span>
  {#if showMeter}
    <div class="progressCounter">
      <span>{perecentageProgress}</span>
      <PercentageIcon />
    </div>
  {/if}
</div>

<style>
  .progressBar {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    width: var(--width, 100%);
  }

  .progressWrapper {
    display: flex;
    flex-grow: 1;
    border: 2px solid var(--primaryColor);
    border-radius: 1.5rem;
    overflow: hidden;
    height: var(--height, 0.5rem);
  }

  .progressMeter {
    background-color: var(--primaryColor);
    height: 100%;
  }

  .progressCounter {
    width: fit-content;
    display: flex;
    align-items: center;
    gap: 0.25rem;
  }

  .progressCounter span {
    font-size: var(--h4);
    font-family: var(--bodyFont);
    color: var(--primaryColor);
  }
</style>

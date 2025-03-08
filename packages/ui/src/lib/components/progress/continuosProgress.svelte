<script>
	import PercentageIcon from '../../icons/percentageIcon.svelte';

	/**
	 * @typedef {Object} Props
	 * @property {number} [progress]
	 * @property {number} [maxValue]
	 * @property {boolean} [showMeter]
	 */

	/** @type {Props} */
	let { progress = 0, maxValue = 100, showMeter = true } = $props();

	/**
	 * @function calculateRelativeProgress
	 * @param {number} progress
	 * @returns {number}
	 */
	function calculateRelativeProgress(progress) {
		let limitedProgress = progress > maxValue ? maxValue : progress;
		let perecentageProgress = (limitedProgress * 100) / maxValue;
		return Math.floor(perecentageProgress);
	}
	let perecentageProgress = $derived(calculateRelativeProgress(progress));
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

<script>
	import Slider from 'svelte-range-slider-pips';

	/**
	 * @typedef {Object} Props
	 * @property {number} [max]
	 * @property {number} [value]
	 * @property {number} [min]
	 * @property {number} [step]
	 * @property {string} [prefix]
	 * @property {string} [suffix]
	 */

	/** @type {Props} */
	let { max = 100, value = $bindable(0), min = 0, prefix = '', suffix = '', step = 10 } = $props();
</script>

<div class="slider">
	<Slider {min} {max} bind:value {prefix} {suffix} pips pipstep={step} all="label" />
</div>

<style>
	.slider {
		width: var(--width, 100%);
		--range-slider: color-mix(
			in srgb,
			var(--primaryColor) 40%,
			transparent 60%
		); /* slider main background color */
		--range-handle-inactive: var(--mutedColor); /* inactive handle color */
		--range-handle: var(--primaryColor); /* non-focussed handle color */
		--range-handle-focus: var(--primaryColor); /* focussed handle color */
		--range-limit: var(--mutedColor); /* limit range background color */
	}
</style>

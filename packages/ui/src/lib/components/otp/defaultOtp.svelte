<script>
	/**
	 * @typedef {Object} Props
	 * @property {number} [numberOfInputs]
	 * @property {(val: string) => boolean} [validator]
	 * @property {string} [otp]
	 */

	/** @type {Props} */
	let { numberOfInputs = 6, validator = () => true, otp = $bindable('') } = $props();

	/** @type {string[]} */
	let boxValues = $state(Array(numberOfInputs).fill(''));

	/** @type {HTMLDivElement|undefined} */
	let otpRef = $state();

	/** @type {number} */
	let focusedBox = $state(0);

	/**
	 * @param {string} value
	 * @param {number} index
	 */
	function handleInput(value, index) {
		if (value == '') return;
		if (validator(value)) focusedBox = Math.min(index + 1, numberOfInputs - 1);
		else boxValues[index] = '';
	}

	/**
	 * @param {KeyboardEvent} event
	 * @param {number} index
	 */
	function handleKeydown(event, index) {
		if (event.key === 'Backspace' && index > 0 && boxValues[index] == '') {
			event.preventDefault();
			focusedBox = index - 1;
		}
	}

	$effect(() => {
		/** @type {HTMLInputElement} */ (otpRef?.children[focusedBox]).focus();
	});

	$effect(() => {
		otp = boxValues.join('');
	});
</script>

<div class="otp" bind:this={otpRef}>
	{#each boxValues as _, idx}
		<input
			class="box"
			type="text"
			maxlength="1"
			oninput={(e) => handleInput(e.currentTarget.value, idx)}
			onkeydown={(e) => handleKeydown(e, idx)}
			bind:value={boxValues[idx]}
		/>
	{/each}
</div>

<style>
	.otp {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
	}

	.box {
		all: unset;
		width: 3rem;
		aspect-ratio: 1/1;
		font-family: var(--bodyFont);
		font-size: var(--h4);
		font-weight: bold;
		text-align: center;
		color: var(--foregroundColor);
		background-color: var(--backgroundColor);
		border: 2px solid var(--foregroundColor);
		border-radius: var(--border-radius);
	}

	.box:focus {
		border-color: var(--primaryColor);
		color: var(--primaryColor);
	}
</style>

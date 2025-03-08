<script>
	/**
	 * @typedef {Object} Props
	 * @property {string} [text]
	 * @property {import("svelte").Snippet} [icon]
	 * @property {"disabled"|"passive"|"primary"|"secondary"|"danger"} [type]
	 * @property {(ev: MouseEvent) => void} [onclick]
	 */

	/** @type {Props} */
	let { text = 'button', icon, type = 'primary', onclick } = $props();
</script>

<button {onclick} class={type} disabled={type == 'disabled'}>
	{@render icon?.()}
	<span>{text}</span>
</button>

<style>
	.disabled {
		--bg: var(--mutedColor);
		cursor: not-allowed;
	}
	.passive {
		--bg: var(--foregroundColor);
	}
	.primary {
		--bg: var(--primaryColor);
	}
	.secondary {
		--bg: var(--secondaryColor);
	}
	.danger {
		--bg: var(--dangerColor);
	}
	button {
		all: unset;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.25rem;
		width: var(--width, fit-content);
		padding-inline: 1rem;
		padding-block: 0.5rem;
		cursor: pointer;
		background-color: var(--bg);
		border-radius: var(--border-radius);
		transition: all 400ms linear;
		--icon: var(--backgroundColor);
	}
	button span {
		text-transform: capitalize;
		color: var(--backgroundColor);
		font-family: var(--bodyFont);
		font-size: var(--body);
		font-weight: bold;
	}
</style>

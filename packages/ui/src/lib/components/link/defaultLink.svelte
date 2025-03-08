<script>
	/**
	 * @typedef {Object} Props
	 * @property {string} text
	 * @property {string} href
	 * @property {boolean} [isBlank]
	 * @property {"primary"|"secondary"} [type]
	 * @property {import("svelte").Snippet} [icon]
	 * @property {boolean} [active]
	 */

	/** @type {Props} */
	let { text, href, isBlank = false, type = 'primary', icon, active = false } = $props();
</script>

<a class:active class="link {type}" {href} target={isBlank ? '_blank' : ''}>
	{@render icon?.()}
	<span>{text}</span>
</a>

<style>
	.link {
		display: inline-flex;
		align-items: center;
		gap: 0.25rem;
		cursor: pointer;
		text-decoration: none;
		padding-bottom: 2px;
		--text: var(--foregroundColor);
		--icon: var(--foregroundColor);
	}

	.link span {
		color: var(--text);
		font-family: var(--bodyFont);
		font-size: var(--body);
		font-weight: bold;
	}

	.link:hover {
		--text: var(--primaryColor);
		--icon: var(--primaryColor);
	}

	.active {
		--text: var(--primaryColor);
		--icon: var(--primaryColor);
		border-bottom: 3px solid var(--primaryColor);
	}
	.link span:empty {
		display: none;
	}

	@media screen and (width<768px) {
		.active {
			border: 0;
		}
	}
</style>

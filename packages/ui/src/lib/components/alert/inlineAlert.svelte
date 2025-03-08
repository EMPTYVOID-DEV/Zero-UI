<script>
	import InfoIcon from '../../icons/infoIcon.svelte';
	import DangerIcon from '../../icons/dangerIcon.svelte';
	import SuccessIcon from '../../icons/successIcon.svelte';

	/**
	 * @typedef {Object} Props
	 * @property {string} header
	 * @property {string} description
	 * @property {"primary"|"success"|"danger"} [type]
	 */

	/** @type {Props} */
	let { header, description, type = 'primary' } = $props();

	/**@type {import("svelte").Component}*/
	let IconComponent = $derived(
		type == 'primary' ? InfoIcon : type == 'danger' ? DangerIcon : SuccessIcon
	);
</script>

<div class="inlineAlert {type}">
	<IconComponent />
	<div class="alertContent">
		<span class="header">{header}</span>
		<span class="description">{description}</span>
	</div>
</div>

<style>
	.primary {
		--icon: var(--primaryColor);
		--main-color: var(--primaryColor);
	}
	.success {
		--icon: var(--successColor);
		--main-color: var(--successColor);
	}
	.danger {
		--icon: var(--dangerColor);
		--main-color: var(--dangerColor);
	}
	.inlineAlert {
		width: var(--width, 100%);
		display: grid;
		grid-template-columns: repeat(2, auto);
		justify-content: start;
		gap: 0.5rem;
		padding: 0.5rem;
		border: 2px solid var(--main-color);
		border-radius: var(--border-radius);
		background-color: color-mix(in srgb, var(--main-color) 30%, transparent 70%);
	}
	.alertContent {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}
	.alertContent .header {
		font-size: var(--body);
		font-family: var(--bodyFont);
		color: var(--foregroundColor);
		font-weight: bold;
	}
	.alertContent .description {
		font-size: var(--body);
		font-family: var(--bodyFont);
		color: var(--foregroundColor);
	}
</style>

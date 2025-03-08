<script>
	import InfoIcon from '../../icons/infoIcon.svelte';
	import DangerIcon from '../../icons/dangerIcon.svelte';
	import SuccessIcon from '../../icons/successIcon.svelte';
	import CustomToast from './customToast.svelte';

	/**
	 * @typedef {Object} ToastAction
	 * @property {string} label
	 * @property {(ev: MouseEvent) => void} action
	 */

	/**
	 * @typedef {Object} Props
	 * @property {string} header
	 * @property {string} description
	 * @property {"primary"|"success"|"danger"} [type]
	 * @property {ToastAction} [toastAction]
	 */

	/** @type {Props} */
	let { header, description, type = 'primary', toastAction } = $props();

	/**@type {import("svelte").Component}*/
	let icon = $derived(type == 'primary' ? InfoIcon : type == 'danger' ? DangerIcon : SuccessIcon);
</script>

<div class="syncToast {type}">
	<CustomToast {description} {header} {toastAction} {icon} />
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
	.syncToast {
		/* this width css variable is passed by svelte-sonner */
		width: var(--width);
	}
</style>

<script>
	import Label from './label.svelte';

	/**
	 * @typedef {Object} Props
	 * @property {number} [sizeLimit]
	 * @property {number} [numberLimit]
	 * @property {string} [description]
	 * @property {string} [acceptedFiles]
	 * @property {File[]} [files]
	 * @property {(files:File[])=>void} [handleChange]
	 */

	/** @type {Props} */
	let {
		sizeLimit = -1,
		numberLimit = -1,
		description = '',
		acceptedFiles = '*',
		files = $bindable([]),
		handleChange
	} = $props();

	/**
	 * @param {number} sizeInBytes
	 */
	function checkSize(sizeInBytes) {
		const sizeInKilos = sizeInBytes / 1000000;
		if (sizeLimit == -1) return false;
		if (sizeInKilos < sizeLimit) return false;
		return true;
	}

	function reachLimit() {
		if (numberLimit == -1) return false;
		else if (files.length < numberLimit) return false;
		return true;
	}

	/**
	 * @param {string} type
	 */
	function checkType(type) {
		const typeArray = type.split('/');
		if (acceptedFiles == '*') return true;
		for (let v of acceptedFiles.split(',')) {
			let testType = v.trim().split('/');
			if (testType[0] == typeArray[0] && (testType[1] == '*' || testType[1] == typeArray[1]))
				return true;
		}
		return false;
	}

	/**
	 * @param {FileList} selectedFiles
	 */
	function addFiles(selectedFiles) {
		if (!selectedFiles) return;
		for (let i = 0; i < selectedFiles.length; i++) {
			if (checkType(selectedFiles[i].type) && !reachLimit() && !checkSize(selectedFiles[i].size))
				files = [...files, selectedFiles[i]];
		}
	}

	/**
	 * @param {number} index
	 */
	function remove(index) {
		files = files.filter((el, idx) => idx != index);
	}

	$effect(() => {
		handleChange?.(files);
	});
</script>

<div class="fileUpload">
	<input
		id="upload"
		type="file"
		accept={acceptedFiles}
		onchange={(e) => {
			let selectedFiles = e.currentTarget.files;
			if (selectedFiles) addFiles(selectedFiles);
		}}
	/>
	<Label
		{description}
		{files}
		handleRemove={remove}
		handleDrop={(dropFiles) => addFiles(dropFiles)}
	/>
</div>

<style>
	.fileUpload {
		width: var(--width, 100%);
	}
	.fileUpload input {
		display: none;
	}
</style>

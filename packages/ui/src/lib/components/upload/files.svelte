<script>
	import { quadIn } from 'svelte/easing';
	import { fade } from 'svelte/transition';
	import CloseIcon from '../../icons/closeIcon.svelte';
	import Mime from 'mime-types';

	/**
	 * @typedef {Object} Props
	 * @property {File[]} files
	 * @property {(index:number)=>void} handleRemove
	 */

	/** @type {Props} */
	let { files, handleRemove } = $props();

	/**
	 *@function formatFileSize
	 * @param {number} fileSizeBytes
	 * @returns {string}
	 */
	function formatFileSize(fileSizeBytes) {
		if (fileSizeBytes < 1024) {
			return fileSizeBytes + ' B';
		} else if (fileSizeBytes < 1024 * 1024) {
			let sizeKB = fileSizeBytes / 1024;
			return sizeKB.toFixed(2) + ' KB';
		} else {
			let sizeMB = fileSizeBytes / (1024 * 1024);
			return sizeMB.toFixed(2) + ' MB';
		}
	}
	/**
	 *@function removeFile
	 * @param {number} fileIndex
	 */
	function removeFile(fileIndex) {
		handleRemove(fileIndex);
	}
</script>

<div class="files">
	{#each files as file, index (file.lastModified)}
		<div class="file" transition:fade={{ easing: quadIn }}>
			<span class="type">.{Mime.extension(file.type) || 'file'}</span>
			<span class="info">
				<span>{file.name.substring(0, 20)}</span>
				<span>{formatFileSize(file.size)}</span>
			</span>
			<button
				class="remove"
				onclick={() => {
					removeFile(index);
				}}><CloseIcon /></button
			>
		</div>
	{/each}
</div>

<style>
	.files {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}
	.file {
		width: 95%;
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	.type {
		font-weight: 400;
		border-radius: 0.25rem;
		color: var(--primaryColor);
	}
	.info {
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
	}
	.info span:first-child {
		word-break: break-word;
	}
	.info span:last-child {
		color: var(--primaryColor);
	}
	.remove {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 2.4rem;
		aspect-ratio: 1/1;
		cursor: pointer;
		outline: none;
		border: none;
		border-radius: 0.25rem;
		margin-left: auto;
		background-color: var(--foregroundColor);
		--icon: var(--backgroundColor);
	}
	span {
		font-size: var(--body);
		font-family: var(--bodyFont);
		color: var(--foregroundColor);
	}
</style>

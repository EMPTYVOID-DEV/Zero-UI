<script>
	/**
	 * @typedef {Object} Props
	 * @property {{icon?:import("svelte").Component,title:string}[]} [tabs]
	 * @property {number} [activeTab]
	 * @property {(activeTab:number)=>void} [handleChange]
	 */

	/** @type {Props} */
	let { tabs = [], activeTab = $bindable(0), handleChange } = $props();
</script>

<div class="tabs">
	{#each tabs as tab, index}
		<button
			class="tab"
			class:active={index == activeTab}
			onclick={() => {
				activeTab = index;
				handleChange?.(activeTab);
			}}
		>
			<tab.icon />
			<span>{tab.title}</span>
		</button>
	{/each}
</div>

<style>
	.tabs {
		width: var(--width, 100%);
		display: flex;
		align-items: center;
		border: 2px solid var(--primaryColor);
		border-radius: var(--border-radius);
		gap: 0.25rem;
		padding: 0.25rem;
		overflow-x: auto;
	}

	.tabs::-webkit-scrollbar {
		display: none;
	}

	.tab {
		height: 2.5rem;
		flex-grow: 1;
		display: flex;
		align-items: center;
		justify-content: start;
		gap: 0.25rem;
		padding: 0.5rem;
		border-radius: var(--border-radius);
		background-color: transparent;
		border: none;
		outline: none;
		cursor: pointer;
		transition: all 200ms ease-in;
		--icon: var(--mutedColor);
	}

	.tab span {
		font-size: var(--small);
		font-family: var(--bodyFont);
		font-weight: bold;
		text-transform: capitalize;
		color: var(--mutedColor);
	}

	.active {
		background-color: var(--primaryColor);
		--icon: var(--foregroundColor);
	}

	.active span {
		color: var(--foregroundColor);
	}

	.tab :global(svg) {
		width: 1.25rem;
		height: 1.25rem;
	}
</style>

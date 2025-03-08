<script>
    import MoonIcon from "../../icons/moonIcon.svelte";
    import SunIcon from "../../icons/sunIcon.svelte";
    import { createEventDispatcher } from "svelte";

    
    /**
     * @typedef {Object} Props
     * @property {"dark" | "light"} [active]
     */

    /** @type {Props} */
    let { active = $bindable("dark") } = $props();

    const dispatch = createEventDispatcher();

    /**
     * @param {"dark" | "light"} newTheme
     */
    function toggleTheme(newTheme) {
        active = newTheme;
        dispatch("change", { theme: active });
    }
</script>

<button onclick={() => toggleTheme(active === "dark" ? "light" : "dark")}>
    {#if active === "dark"}
        <MoonIcon />
    {:else}
        <SunIcon />
    {/if}
</button>

<style>
    button {
        all: unset;
        cursor: pointer;
    }
</style>

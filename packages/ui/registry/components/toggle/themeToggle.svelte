<script>
    import MoonIcon from "../../icons/moonIcon.svelte";
    import SunIcon from "../../icons/sunIcon.svelte";
    import { createEventDispatcher } from "svelte";

    /** @type {"dark" | "light"} */
    export let active = "dark";

    const dispatch = createEventDispatcher();

    /**
     * @param {"dark" | "light"} newTheme
     */
    function toggleTheme(newTheme) {
        active = newTheme;
        dispatch("change", { theme: active });
    }
</script>

<button on:click={() => toggleTheme(active === "dark" ? "light" : "dark")}>
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

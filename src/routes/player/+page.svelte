<script>
  import Player from "../Player.svelte";
  import About from "../About.svelte";
  import Navbar from "../Navbar.svelte";
  import Help from "../Help.svelte";
  import { onMount } from "svelte";
  export let data;
  onMount(() => {
    localStorage.setItem(data.title, JSON.stringify(data));
  })
</script>

<Navbar />
{#if data.title}
  <About title={data.title} des={data.des}/>
{/if}

{#if data.link}
  <Player url={data.link}/>
{/if}

<Help />

<style lang="scss"></style>

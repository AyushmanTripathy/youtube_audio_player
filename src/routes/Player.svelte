<script>
  import { onMount } from "svelte";

  export let url;
  let audio, paused = true, width = 0;

  const play = () => (audio.paused ? audio.play() : audio.pause());
  const forward = () => (audio.currentTime += 10);
  const backward = () => (audio.currentTime -= 10);

  onMount(() => {
    audio.ontimeupdate = () => width = (audio.currentTime / audio.duration)* 100;
    audio.addEventListener("pause", () => paused = true);
    audio.addEventListener("play", () => paused = false);
    play();
  })
</script>

<audio display="none" bind:this="{audio}" src="{url}"></audio>
<main>
  <div id="container">
    {#if audio}
    <div id="bar" style="width:{width}%"></div>
    {/if}
  </div>
  <section>
    <button on:click="{backward}">
      <span class="material-symbols-outlined"> fast_rewind </span>
    </button>
    <button on:click="{play}">
    {#if paused}
      <span class="material-symbols-outlined"> play_circle </span>
    {:else}
      <span class="material-symbols-outlined"> pause_circle </span>
    {/if}
    </button>
    <button on:click="{forward}">
      <span class="material-symbols-outlined"> fast_forward </span>
    </button>
  </section>
</main>

<style lang="scss">
  main {
    @include component;
    @include flex(column);
    justify-content: space-evenly;
    align-items: center;
    padding-top: 3vh;
    gap: 5px;
  }
  #container {
    @include section(6px, 80%);
    border: 1px solid $hl;
  }
  #bar {
    height: 100%;
    background: $hl;
  }
  section {
    @include grid(1fr 1fr 1fr, 1fr);
    @include section(40px, 90%);
  }
  button {
    @include flex(column);
    @include flex-center;
    outline: none;
    background: $sec;
    border: none;
    color: $light;
    span {
      font-size: 30px;
      color: $hl;
      text-align: center;
    }
  }
</style>

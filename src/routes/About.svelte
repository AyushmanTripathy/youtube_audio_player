<script>
  import { onMount } from "svelte";

  export let title;
  export let des;

  let toggled = false,
    description = "Toggle Description";

  function toggleDescription() {
    if (toggled) description.innerText = "";
    else description.innerText = des;
    toggled = !toggled;
  }
</script>

<main>
  <h3>{title}</h3>
  <div>
    <p bind:this="{description}"></p>
    <p on:click="{toggleDescription}">
      {#if toggled}
      <span class="material-symbols-outlined"> keyboard_arrow_up </span>
      {:else}
      <span class="material-symbols-outlined"> keyboard_arrow_down </span>
      {/if}
    </p>
  </div>
</main>

<style lang="scss">
  main {
    @include component;
    @include flex(column);
    @include flex-center;
  }
  h3 {
    @include section(3h, 80vw);
    max-width: $maxwidth;
    overflow: hidden;
  }
  div {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
    width: 80vw;
    max-width: $maxwidth;
    max-height: 60vh;
    overflow: scroll;
    padding-bottom: 30px;
  }
  div::-webkit-scrollbar {
    display: none;
  }
</style>

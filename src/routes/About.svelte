<script>
  import { onMount } from "svelte";

  export let title;
  export let des;

  let description;
  onMount(() => (description.innerText = des));
</script>

<main>
  <h3>{title}</h3>
  <div bind:this="{description}"></div>
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

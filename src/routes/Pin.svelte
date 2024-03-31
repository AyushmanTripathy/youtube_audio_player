<script>
  export let data;
  const play = () => window.location.href = "/player?link=" + data.originalUrl;
</script>

<main on:click={play}>
  <p>{data.title}</p>
</main>

<style lang="scss">
  main {
    @include component;
    @include flex(column);
    @include flex-center;
  }
  p {
    width: 90%;
  }
</style>

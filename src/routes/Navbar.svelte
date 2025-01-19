<script>
  const back = () => window.location.href = "/";
</script>

<main>
  <h3> </h3>
  <button on:click="{back}">
    <span class="material-symbols-outlined"> arrow_back_ios </span>
  </button>
</main>

<style lang="scss">
  main {
    @include component;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 4vh;
  }

  button {
    outline: none;
    background: $sec;
    border: none;
    color: $light;
  }
</style>

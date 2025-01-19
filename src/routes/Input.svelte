<script>
  let url;
  function redirect() {
    window.location.href = "/player?link=" + url;
  }
</script>

<main>
  <input type="text" bind:value={url}>
  <button on:click={redirect}> Use </button>
</main>

<style lang="scss">
  main {
    @include component;
    @include flex(row);
    align-items: center;
    justify-content: space-evenly;
  }

  input, button {
    text-decoration: none;
    outline: none;
    border: none;
    background-color: transparent;
    color: $light;
    padding: 10px;
    gap: 5vw;
  } 

  input {
    border-bottom: 1px solid $light;
  }
</style>

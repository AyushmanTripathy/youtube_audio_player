<main>
  <slot></slot>
  <div></div>
</main>

<style lang="scss">
  main {
    @include absolute;
    @include section(auto, 100vw);
    @include flex(column);
    @include sans;

    gap: 10px;
    color: $light;
    align-items: center;
    min-height: 95vh;
    background-color: $pri;
    padding-top: 5vh;
  }

  div {
    @include section(30px, 80vw);
  }
</style>

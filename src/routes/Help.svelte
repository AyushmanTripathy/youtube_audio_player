<script></script>

<main>
  <section>
    <h3>Youtube Audio Player</h3>
    <p>share any youtube video with this app and watch the magic</p>
    <p>
      Made with love by
      <a href="https://github.com/AyushmanTripathy">@AyushmanTripathy</a>
    </p>
  </section>
</main>

<style lang="scss">
  main {
    @include component;
    @include flex(column);
    @include flex-center;
  }

  section {
    width: 90%;
  }

  a {
    text-decoration: none;
    color: $hl;
  }
</style>

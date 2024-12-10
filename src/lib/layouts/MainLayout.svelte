<script lang="ts">
  import { Link } from 'svelte-routing';
</script>

<div class="layout">
  <nav>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
  </nav>

  <main>
    <div class="grid place-items-center">
      <slot />
    </div>
  </main>
</div>

<style lang="postcss">
  .layout {
    text-align: center;
    margin: 10px;
  }
</style>
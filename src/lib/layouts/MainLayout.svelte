<script lang="ts">
  import { Link } from 'svelte-routing';
</script>

<div class="bg-primary-500 w-full h-dvh">
  <nav>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
  </nav>

  <main>
    <slot />
  </main>
</div>

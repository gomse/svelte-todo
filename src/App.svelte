<script lang="ts">
  import { Router, Route } from 'svelte-routing';
  import { routes } from './routes';

  import MainLayout from './lib/layouts/MainLayout.svelte';
</script>

<Router>
  <MainLayout>
    {#each routes as route}
      <Route {...route} />
    {/each}
  </MainLayout>
</Router>

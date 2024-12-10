<script lang="ts">
  import { todoBoards } from '@/lib/stores/todo';
</script>
<main>
  <h1 class="text-3xl">Home</h1>
  {#each $todoBoards as board}
    <div>
      <span>{board.title}</span>
    </div>
  {/each}
</main>

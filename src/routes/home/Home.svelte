<script lang="ts">
  import Board from '@/lib/components/Board.svelte';
import { todoBoards } from '@/lib/stores/todo';
</script>
<main>
  <div class="flex flex-nowrap flex-row justify-center items-start">
    {#each $todoBoards as board}
      <div class="w-[350px] m-10 text-left">
        <Board board={board} />
      </div>
    {/each}
  </div>
</main>

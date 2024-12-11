<script lang="ts">
  import { todoItems, type TodoBoard } from '../stores/todo';
    import Item from './Item.svelte';
  export let board: TodoBoard | null = null;

  $: items = $todoItems.filter(item => item.boardId === board?.id);
</script>

{#if board}
<div class="bg-gray-200 p-3">
  <div>
    <h2 class="font-bold">{board.title}</h2>
  </div>
  <div class="mt-2">
    {#if items.length > 0}
      {#each items as item}
        <div class="py-1"><Item item={item} /></div>
      {/each}
    {:else}
      <div>Emtpy</div>
    {/if}
  </div>
</div>
{/if}

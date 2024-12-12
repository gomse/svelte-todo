<script lang="ts">
  import { v4 as uuid } from 'uuid';
  import { todoEditingItemId, todoItems, type TodoBoard } from '../stores/todo';
  import Item from './Item.svelte';

  export let board: TodoBoard | null = null;

  $: items = $todoItems.filter(item => item.boardId === board?.id);

  function addItem() {
    if (!board) return;

    const id = uuid();

    todoItems.update(items => [...items, {
      id, boardId: board.id, title: ''
    }]);

    todoEditingItemId.set(id);
  }
</script>

{#if board}
<div class="card">
  <header class="card-header flex justify-between items-center">
    <h2 class="font-bold">{board.title}</h2>
    <button
      on:click={addItem}
      class="btn btn-sm variant-filled-primary"
    >
      +
    </button>
  </header>
  <section class="p-4">
    <ul class="list">
      {#if items.length > 0}
        {#each items as item}
          <li><Item item={item} /></li>
        {/each}
      {:else}
        <div>Emtpy</div>
      {/if}
    </ul>
  </section>
</div>
{/if}

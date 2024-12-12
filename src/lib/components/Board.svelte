<script lang="ts">
  import { v4 as uuid } from 'uuid';
  import { todoEditingItemId, todoItems, type TodoBoard } from '../stores/todo';
  import Item from './Item.svelte';

  export let board: TodoBoard | null = null;

  let isDragOver = false;

  $: items = $todoItems.filter(item => item.boardId === board?.id);

  function addItem() {
    if (!board) return;

    const id = uuid();

    todoItems.update(items => [...items, {
      id, boardId: board.id, title: ''
    }]);

    todoEditingItemId.set(id);
  }

  function handleDragOver(e: DragEvent) {
    e.preventDefault();
    isDragOver = true;
    if (!e.dataTransfer) return;
    e.dataTransfer.dropEffect = 'move';
  }

  function handleDragLeave() {
    isDragOver = false;
  }

  function handleDrop(e: DragEvent) {
    e.preventDefault();
    isDragOver = false;

    if (!board || !e.dataTransfer) return;

    const itemId = e.dataTransfer.getData('text/plain');

    todoItems.update(todos => todos.map(todo => todo.id === itemId ? { ...todo, boardId: board.id } : todo));
  }
</script>

{#if board}
<div
  role="region"
  class="card"
  class:border-2={isDragOver}
  class:border-tertiary-500={isDragOver}
  on:dragover={handleDragOver}
  on:dragleave={handleDragLeave}
  on:drop={handleDrop}
>
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

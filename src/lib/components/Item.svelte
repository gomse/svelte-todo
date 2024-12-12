<script lang="ts">
  import { todoEditingItemId, todoItems, type TodoItem } from '../stores/todo';

  export let item: TodoItem;

  let isDragging = false;
  let editedText = item.title;
  let inputElement: HTMLInputElement;

  $: isEditing = $todoEditingItemId === item.id;
  $: if (isEditing && inputElement) {
    inputElement.focus();
  }

  function handleClick() {
    todoEditingItemId.set(item.id);
  }

  function handleBlur() {
    todoEditingItemId.set(null);

    if (editedText.trim() === '') {
      todoItems.update(items => items.filter(i => i.id !== item.id));
    } else if (editedText != item.title) {
      todoItems.update(items =>
        items.map(i =>
          i.id === item.id ? { ...i, title: editedText } : i
        )
      );
    }
  }

  function handleKeyDown(e: KeyboardEvent) {
    if (e.key === 'Enter') {
      handleBlur();
    }

    if (e.key === 'Escape') {
      todoEditingItemId.set(null);

      if (item.title === '') {
        todoItems.update(items => items.filter(i => i.id !== item.id));
      } else {
        editedText = item.title;
      }
    }
  }

  function handleDragStart(e: DragEvent) {
    isDragging = true;
    if (!e.dataTransfer) return;
    e.dataTransfer.setData('text/plain', item.id);
    e.dataTransfer.effectAllowed = 'move';
  }

  function handleDragEnd() {
    isDragging = false;
  }
</script>

{#if item}
<div
  role="button"
  tabindex="0"
  class="w-full h-[40px]"
  class:shadow={isDragging}
  draggable={!isEditing}
  on:dragstart={handleDragStart}
  on:dragend={handleDragEnd}
>
  {#if isEditing}
    <input
      bind:this={inputElement}
      type="text"
      bind:value={editedText}
      on:keydown={handleKeyDown}
      on:blur={handleBlur}
      class="input p-2"
    />
  {:else}
    <button 
      type="button"
      class="w-full text-left p-2"
      on:click={handleClick}
    >
      {item.title}
    </button>
  {/if}
</div>
{/if}

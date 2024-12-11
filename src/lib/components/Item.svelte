<script lang="ts">
  import { type TodoItem } from '../stores/todo';

  export let item: TodoItem;
</script>

{#if item}
<div class="h-[40px]">
  <input type="text" value={item.title} class="size-full p-1" readonly />
</div>
{/if}

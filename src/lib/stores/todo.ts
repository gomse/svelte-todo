import { writable } from 'svelte/store';
import { v4 as uuid } from 'uuid';

export type TodoId = string;

export interface TodoBoard {
  id: TodoId;
  title: string;
}

export interface TodoItem {
  id: TodoId;
  boardId: string;
  title: string;
}
  
const _boards: TodoBoard[] = [
  { id: uuid(), title: 'Todo' },
  { id: uuid(), title: 'In Progress' },
  { id: uuid(), title: 'Done' }
];

const _items: TodoItem[] = [
  { id: uuid(), boardId: _boards[0].id, title: '안녕하세요' },
  { id: uuid(), boardId: _boards[0].id, title: '만나서 반갑습니다' }
];

export const todoBoards = writable(_boards);
export const todoItems = writable(_items);

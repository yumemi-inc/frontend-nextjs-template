import { atom } from 'recoil';
const todoListState = atom({
  key: 'TodoList',
  default: [],
});

export default todoListState;

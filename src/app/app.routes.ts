import { Routes } from '@angular/router';
import { TodoList } from './components/todo-list/todo-list';

export const routes: Routes = [
  {
    path: '',
    component: TodoList,
  },
];

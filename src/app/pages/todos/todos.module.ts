import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodosRoutingModule } from './todos-routing.module';
import { TodosComponent } from './todos.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AddTodoComponent } from './components/add-todo/add-todo.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';

@NgModule({
  declarations: [TodosComponent, AddTodoComponent, TodoListComponent],
  imports: [CommonModule, TodosRoutingModule, SharedModule],
})
export class TodosModule {}

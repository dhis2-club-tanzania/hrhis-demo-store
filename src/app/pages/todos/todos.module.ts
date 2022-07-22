import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodosRoutingModule } from './todos-routing.module';
import { TodosComponent } from './todos.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AddTodoComponent } from './components/add-todo/add-todo.component';

@NgModule({
  declarations: [TodosComponent, AddTodoComponent],
  imports: [CommonModule, TodosRoutingModule, SharedModule],
})
export class TodosModule {}

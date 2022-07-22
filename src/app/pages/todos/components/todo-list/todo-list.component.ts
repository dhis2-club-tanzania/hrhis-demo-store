import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddTodoComponent } from '../add-todo/add-todo.component';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  @Input() todos!: any[];

  @Output() editTodo: EventEmitter<any> = new EventEmitter<any>();
  constructor() {}

  ngOnInit() {}

  onEdit(e: Event, todo: any) {
    e.stopPropagation();
    this.editTodo.emit(todo);
  }

  onDelete(e: Event, id: string) {
    e.stopPropagation();
  }
}

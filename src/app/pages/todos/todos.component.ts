import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddTodoComponent } from './components/add-todo/add-todo.component';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  todos: any[] = [{ id: 1, title: 'Test', description: 'This is test todo' }];
  constructor(private dialog: MatDialog) {}

  ngOnInit() {}

  onAddTodo(event: Event) {
    event.stopPropagation();

    const createTodoDialog = this.dialog.open(AddTodoComponent, {
      disableClose: true,
    });

    createTodoDialog.afterClosed().subscribe((response) => {
      if (response?.payload) {
        console.log(response.payload);
        this.todos = [...this.todos, response.payload];
      }
    });
  }

  onEditTodo(todo: any) {
    const editTodoDialog = this.dialog.open(AddTodoComponent, {
      disableClose: true,
      data: { todo },
    });

    editTodoDialog.afterClosed().subscribe((response) => {
      console.log(response);

      if (response?.payload) {
        const availableTodoIndex = this.todos.indexOf(
          this.todos.find((todo) => todo.id === response.payload.id)
        );

        if (availableTodoIndex !== -1) {
          this.todos = [
            ...this.todos.slice(0, availableTodoIndex),
            response.payload,
            ...this.todos.slice(availableTodoIndex + 1),
          ];
        }
      }
    });
  }
}

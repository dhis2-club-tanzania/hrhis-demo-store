import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AddFormComponent } from 'src/app/shared/components/add-form/add-form.component';
import { User } from '../comment/models/user.model';
import { AddTodoComponent } from './components/add-todo/add-todo.component';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  constructor(private dialog: MatDialog) {}

  ngOnInit() {}

  onAddTodo(event: Event) {
    event.stopPropagation();

    const createTodoDialog = this.dialog.open(AddTodoComponent, {
      disableClose: true,
      data: {
        name: new FormGroup({
          name: new FormControl(''),
          username: new FormControl(''),
        }),
      },
    });

    createTodoDialog.afterClosed().subscribe((response) => {
      if (response?.payload) {
        console.log(response?.payload);
        // this.users = _.uniqBy([...payload.userResponse, ...this.users], 'id');
      }
    });
  }
}

import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from 'src/app/pages/comment/models/user.model';
import { AddFormComponent } from 'src/app/shared/components/add-form/add-form.component';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss'],
})
export class AddTodoComponent implements OnInit {
  constructor(
    private dialogRef: MatDialogRef<AddTodoComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any
  ) {}

  todoAddForm: FormGroup = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
    status: new FormControl(''),
  });

  ngOnInit(): void {}

  onSaveFormData(event: Event) {
    event.stopPropagation();
    this.dialogRef.close({ payload: this.todoAddForm.value });
  }
}

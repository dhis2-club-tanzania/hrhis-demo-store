import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { User } from '../../models/user.model';
import { AddFormComponent } from '../add-form/add-form.component';
import * as _ from 'lodash';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  @Input() users: User[] | null = [];
  createUserDialog!: MatDialogRef<AddFormComponent>;

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}

  onCreateUser() {
    this.createUserDialog = this.dialog.open(AddFormComponent, {
      disableClose: true,
    });
    this.createUserDialog
      .afterClosed()
      .subscribe((payload: { userResponse: User[] }) => {
        if (payload && payload.userResponse && this.users) {
          this.users = _.uniqBy([...payload.userResponse, ...this.users], 'id');
        }
      });
  }

  onEditUser() {}

  onDeleteUser() {}

  onViewMoreUserDetails() {}
}

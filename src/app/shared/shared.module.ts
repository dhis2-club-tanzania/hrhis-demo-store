import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NGDependencies } from './exports/ng.export';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddFormComponent } from './components/add-form/add-form.component';

@NgModule({
  declarations: [AddFormComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, ...NGDependencies],
  exports: [...NGDependencies, FormsModule, ReactiveFormsModule],
})
export class SharedModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './components/table/table.component';

import { AgGridModule } from 'ag-grid-angular';

@NgModule({
  declarations: [TableComponent],
  imports: [
    CommonModule,
    AgGridModule.withComponents([])
  ],
  exports: [
    TableComponent
  ]
})
export class SharedModule { }

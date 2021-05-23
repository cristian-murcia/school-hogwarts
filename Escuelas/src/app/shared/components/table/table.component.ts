import { Component, Input, OnInit } from '@angular/core';
import { IListTable } from '../../models/list-table.interface';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input() public listData: IListTable[];

  columnDefs = [
    {
      field: 'Name',
      width: 90,
      minWidth: 90,
      maxWidth: 350,
    },
    {
      field: 'Patronus',
      width: 90,
      minWidth: 90,
      maxWidth: 350,
    },
    {
      field: 'Age',
      width: 90,
      minWidth: 90,
      maxWidth: 350,
    },
    {
      field: 'Imagen',
      width: 90,
      minWidth: 150,
      maxWidth: 350,
      cellRenderer: createHtmlImg,
    }
  ];

  public rowData: [];
  public getRowHeight: any;
  public defaultColDef: any;

  constructor() {
    this.defaultColDef = {
      flex: 1,
      sortable: true,
      resizable: true,
      filter: true,
    };
  }

  ngOnInit(): void {
  }

  public onGridReady(params: any) {
    params.api.setRowData(this.listData);
  }

}

const createHtmlImg = (params: any) =>
  `<img class="img-fluid img-thumbnail"
    style="min: 90px; width: 130px;"
    alt="${params.data.Name}" src="${params.data.Imagen}">`;

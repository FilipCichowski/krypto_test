import { TableDataService } from 'src/app/services/table-data.service';
import { SelectedRowIdService } from './../../services/selected-row-id.service';
import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { DxDataGridComponent } from 'devextreme-angular';
import { CryptoDataSelected } from 'src/app/interfaces/crypto-data-selected';

@Component({
  selector: 'app-tableview',
  templateUrl: './tableview.component.html',
  styleUrls: ['./tableview.component.scss'],
})
export class TableviewComponent implements OnInit {
  @ViewChild('dataGridRef', { static: false })
  dataGrid!: DxDataGridComponent;

  @Input()
  data: CryptoDataSelected[] = [];

  public setSelectedRowId() {
    this.selectedRowId.setSelectedRowId(
      this.dataGrid.instance.getSelectedRowsData()[0].id
    );
    console.log(this.selectedRowId.getSelectedRowId());
  }

  public getSelectedRowId() {
    return this.selectedRowId;
  }

  constructor(private selectedRowId: SelectedRowIdService) {}

  ngOnInit(): void {
    console.log("tableview refreshed");
  }
}

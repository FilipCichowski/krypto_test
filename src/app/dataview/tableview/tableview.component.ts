import { DataService } from 'src/app/services/refresh-data.service';
import { DeleteButtonStateService } from './../../services/delete-button-state.service';
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

  notifyForChange() {
    this.deleteButtonState.notifyAboutChange();
  }

  public setSelectedRowId() {
    let tableSelectedRowId = this.dataGrid.instance.getSelectedRowsData()[0].id;
    this.selectedRowId.setSelectedRowId(tableSelectedRowId);
    if (
      this.deleteButtonState.requestButtonStateChangeAndNotify(tableSelectedRowId)
    ) {
      this.notifyForChange();
    }
  }

  public getSelectedRowId() {
    return this.selectedRowId;
  }

  constructor(
    private selectedRowId: SelectedRowIdService,
    private deleteButtonState: DeleteButtonStateService
  ) {}

  ngOnInit(): void {
    console.log('tableview refreshed');
  }
}

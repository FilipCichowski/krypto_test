import { DataService } from './../../services/refresh-data.service';
import { TableDataService } from 'src/app/services/table-data.service';
import { UserSelectedService } from './../../services/user-selected.service';
import { SelectedRowIdService } from './../../services/selected-row-id.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-delete-crypto-dialog',
  templateUrl: './delete-crypto-dialog.component.html',
  styleUrls: ['./delete-crypto-dialog.component.scss'],
})
export class DeleteCryptoDialogComponent implements OnInit {
  deleteCrypto() {
    const selectedId = this.selectedRowId.getSelectedRowId();
    this.userSelected.removeSelectedById(selectedId);
    this.tableData.updateData();
    this.notifyForChange();
    console.log("notify for change");
    console.log(this.userSelected.getUserSelected());
  }

  notifyForChange() {
    this.dataService.notifyAboutChange();
  }

  constructor(
    private selectedRowId: SelectedRowIdService,
    private userSelected: UserSelectedService,
    private tableData: TableDataService,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    
  }
}

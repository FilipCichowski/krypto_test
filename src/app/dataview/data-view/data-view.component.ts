import { TableDataService } from 'src/app/services/table-data.service';
import { UserSelectedService } from './../../services/user-selected.service';
import { DeleteCryptoDialogComponent } from './../delete-crypto-dialog/delete-crypto-dialog.component';
import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { OverlayContainer } from '@angular/cdk/overlay';
import { AddCryptopDialogComponent } from './../add-cryptop-dialog/add-cryptop-dialog.component';
import { CryptoDataSelected } from 'src/app/interfaces/crypto-data-selected';
import { DataService } from 'src/app/services/refresh-data.service';
import { Subscription } from 'rxjs';
import { DeleteButtonStateService } from 'src/app/services/delete-button-state.service';

@Component({
  selector: 'app-data-view',
  templateUrl: './data-view.component.html',
  styleUrls: ['./data-view.component.scss'],
})
export class DataViewComponent implements OnInit {
  @Input()
  header: string = "";
  @Input()
  showSelectedOnly: boolean = false;

  tableData: CryptoDataSelected[] = [];
  disableDelete: boolean = true;

  notifierSubscriptionDelete: Subscription =
    this.deleteButtonState.subjectNotifier.subscribe((notified) => {
      this.disableDelete = this.deleteButtonState.getButtonState();
    });

  notifierSubscriptionData: Subscription =
    this.dataService.subjectNotifier.subscribe((notified) => {
      this.getData();
    });

  notifierSubscriptionUserSelected: Subscription =
    this.userSelected.subjectNotifier.subscribe((notified) => {
      this.getData();
    });

  onAddCrypto() {
    const addCryptoDialog = this.dialog.open(AddCryptopDialogComponent, {
      panelClass: 'add-crypto-container',
    });
  }

  onDeleteCrypto() {
    const deleteCryptoDialog = this.dialog.open(DeleteCryptoDialogComponent, {
      width: '20vw',
      panelClass: 'delete-crypto-container',
    });
  }

  getData() {
    this.tableData = this.showSelectedOnly ? this.tableDataServ.getTableDataSelectedOnly() : this.tableDataServ.getTableData();
  }

  constructor(
    private tableDataServ: TableDataService,
    private dialog: MatDialog,
    private overlay: OverlayContainer,
    private dataService: DataService,
    private deleteButtonState: DeleteButtonStateService,
    private userSelected: UserSelectedService
  ) {}

  ngOnInit(): void {
    this.getData()
  }

  ngOnDestroy() {
    this.notifierSubscriptionData.unsubscribe();
    this.notifierSubscriptionDelete.unsubscribe();
  }
}

import { DeleteCryptoDialogComponent } from './../delete-crypto-dialog/delete-crypto-dialog.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { OverlayContainer } from '@angular/cdk/overlay';
import { AddCryptopDialogComponent } from './../add-cryptop-dialog/add-cryptop-dialog.component';
import { TableDataService } from './../../services/table-data.service';
import { CryptoDataSelected } from 'src/app/interfaces/crypto-data-selected';
import { DataService } from 'src/app/services/refresh-data.service';
import { Subscription } from 'rxjs';
import { DeleteButtonStateService } from 'src/app/services/delete-button-state.service';

@Component({
  selector: 'app-popular-crypto',
  templateUrl: './popular-crypto.component.html',
  styleUrls: ['./popular-crypto.component.scss'],
})
export class PopularCryptoComponent implements OnInit {
  tableData: CryptoDataSelected[] = [];
  disableDelete: boolean = true;

  notifierSubscriptionDelete: Subscription =
    this.deleteButtonState.subjectNotifier.subscribe((notified) => {
      console.log(this.deleteButtonState.getButtonState());
      this.disableDelete = this.deleteButtonState.getButtonState();
    });

  notifierSubscriptionData: Subscription =
    this.dataService.subjectNotifier.subscribe((notified) => {
      this.tableData = this.tableDataServ.getTableData();
    });

  onAddCrypto() {
    const addCryptoDialog = this.dialog.open(AddCryptopDialogComponent, {
      panelClass: 'add-crypto-container',
    });
  }

  onDeleteCrypto() {
    const deleteCryptoDialog = this.dialog.open(DeleteCryptoDialogComponent, {
      width: "20vw",
      panelClass: 'delete-crypto-container',
    });
  }

  constructor(
    private tableDataServ: TableDataService,
    private dialog: MatDialog,
    private overlay: OverlayContainer,
    private dataService: DataService,
    private deleteButtonState: DeleteButtonStateService
  ) {}

  ngOnInit(): void {
    this.tableData = this.tableDataServ.getTableData();
    this.overlay.getContainerElement().classList.add('darkMode');
  }

  ngOnDestroy() {
    this.notifierSubscriptionData.unsubscribe();
    this.notifierSubscriptionDelete.unsubscribe();
  }
}

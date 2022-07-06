import { DeleteCryptoDialogComponent } from './../delete-crypto-dialog/delete-crypto-dialog.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { OverlayContainer } from '@angular/cdk/overlay';
import { AddCryptopDialogComponent } from './../add-cryptop-dialog/add-cryptop-dialog.component';
import { TableDataService } from './../../services/table-data.service';
import { CryptoDataSelected } from 'src/app/interfaces/crypto-data-selected';
import { DataService } from 'src/app/services/refresh-data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-popular-crypto',
  templateUrl: './popular-crypto.component.html',
  styleUrls: ['./popular-crypto.component.scss'],
})
export class PopularCryptoComponent implements OnInit {
  tableData: CryptoDataSelected[] = [];

  onAddCrypto() {
    const addCryptoDialog = this.dialog.open(AddCryptopDialogComponent, {
      disableClose: true,
      panelClass: 'add-crypto-container',
    });
  }

  onDeleteCrypto() {
    const deleteCryptoDialog = this.dialog.open(DeleteCryptoDialogComponent, {
      disableClose: false,
      panelClass: 'delete-crypto-container',
    });
  }

  notifierSubscription: Subscription =
    this.dataService.subjectNotifier.subscribe((notified) => {
      this.tableData = this.tableDataServ.getTableData();
    });

  constructor(
    private tableDataServ: TableDataService,
    private dialog: MatDialog,
    private overlay: OverlayContainer,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    this.tableData = this.tableDataServ.getTableData();
    this.overlay.getContainerElement().classList.add('darkMode');
  }
}

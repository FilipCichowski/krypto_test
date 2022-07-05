import { AddCryptopDialogComponent } from './../add-cryptop-dialog/add-cryptop-dialog.component';
import { TableDataService } from './../../services/table-data.service';
import { UserSelectedService } from './../../services/user-selected.service';
import { CoinDataService, CryptoData } from './../../services/coin-data.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { OverlayContainer } from '@angular/cdk/overlay';

@Component({
  selector: 'app-popular-crypto',
  templateUrl: './popular-crypto.component.html',
  styleUrls: ['./popular-crypto.component.scss'],
})
export class PopularCryptoComponent implements OnInit {
  tableData: any;
  cryptoData: any;

  onAddCrypto() {
    const addCryptoDialog = this.dialog.open(AddCryptopDialogComponent, {
      disableClose: true,
      panelClass: 'add-crypto-container',
    });
  }

  constructor(
    private tableDataServ: TableDataService,
    private dialog: MatDialog,
    private coinData: CoinDataService,
    private overlay: OverlayContainer
  ) {}

  ngOnInit(): void {
    this.tableData = this.tableDataServ.getTableData();
    this.overlay.getContainerElement().classList.add("darkMode");
  }
}

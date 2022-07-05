import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { OverlayContainer } from '@angular/cdk/overlay';
import { AddCryptopDialogComponent } from './../add-cryptop-dialog/add-cryptop-dialog.component';
import { TableDataService } from './../../services/table-data.service';
import { CryptoDataSelected } from 'src/app/interfaces/crypto-data-selected';

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

  constructor(
    private tableDataServ: TableDataService,
    private dialog: MatDialog,
    private overlay: OverlayContainer
  ) {}

  ngOnInit(): void {
    this.tableData = this.tableDataServ.getTableData();
    this.overlay.getContainerElement().classList.add('darkMode');
  }
}

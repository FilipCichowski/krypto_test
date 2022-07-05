import { AddCryptopDialogComponent } from './../add-cryptop-dialog/add-cryptop-dialog.component';
import { TableDataService } from './../../services/table-data.service';
import { UserSelectedService } from './../../services/user-selected.service';
import { CoinDataService } from './../../services/coin-data.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-popular-crypto',
  templateUrl: './popular-crypto.component.html',
  styleUrls: ['./popular-crypto.component.scss']
})
export class PopularCryptoComponent implements OnInit {
  data: any;

  onAddCrypto() {
    const addCryptoDialog = this.dialog.open(AddCryptopDialogComponent, {
      disableClose: true,
      panelClass: 'add-crypto-container'
    })
  }

  constructor(private tableData: TableDataService, private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.data = this.tableData.getTableData();
  }
}

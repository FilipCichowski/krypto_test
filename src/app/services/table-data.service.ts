import { Injectable, OnInit } from '@angular/core';
import { CoinDataService } from './coin-data.service';
import { CryptoData } from '../interfaces/crypto-data';
import { UserSelectedService } from './user-selected.service';
import { CryptoDataSelected } from '../interfaces/crypto-data-selected';

@Injectable({
  providedIn: 'root',
})
export class TableDataService {
  private tableData: CryptoDataSelected[] = [];
  private tableDataSelectedOnly: CryptoDataSelected[] = [];

  private updateTableData() {
    for (let e of this.coinData.getCryptoData()) {
      if (this.userSelected.getUserSelected().includes(e.id)) {
        this.tableData.push({...e, isSelected: true})
      } else {
        this.tableData.push({ ...e, isSelected: false });
      }
    }
  }

  private updateTableDataSelectedOnly() {
    this.tableData.forEach((e: any) => {
      if (e.isSelected) {
        this.tableDataSelectedOnly.push(e);
      }
    });
  }

  public getTableData() {
    return this.tableData;
  }

  public getTableDataSelectedOnly() {
    return this.tableDataSelectedOnly;
  }

  constructor(
    private coinData: CoinDataService,
    private userSelected: UserSelectedService
  ) {
    this.updateTableData();
    this.updateTableDataSelectedOnly();
  }

  ngOnInit() {}
}

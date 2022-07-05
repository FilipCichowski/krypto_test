import { CoinDataService, CryptoData } from './coin-data.service';
import { Injectable } from '@angular/core';
import { UserSelectedService } from './user-selected.service';

export interface CryptoDataSelected {
  symbol: string,
  name: string,
  price: number,
  low: number,
  high: number,
  marketCap: number,
  img: string,
  id: string,
  isSelected: boolean
}

@Injectable({
  providedIn: 'root',
})

export class TableDataService {
  tableData: CryptoData[] = this.coinData.getCryptoData();
  tableDataSelectedOnly: CryptoDataSelected[] = [];

  private updateTableData() {
    this.tableData.forEach((e: any) => {
      this.userSelected.getUserSelected().includes(e.id)
        ? (e.isSelected = true)
        : (e.isSelected = false);
    });
  }

  private updateTableDataSelectedOnly() {
    this.tableData.forEach((e: any) => {
      console.log("update table ", e)
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
}

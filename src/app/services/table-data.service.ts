import { Injectable, OnInit } from '@angular/core';
import { CoinDataService } from './coin-data.service';
import { CryptoData } from '../interfaces/crypto-data';
import { UserSelectedService } from './user-selected.service';
import { CryptoDataSelected } from '../interfaces/crypto-data-selected';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TableDataService {
  private tableData: CryptoDataSelected[] = [];
  private tableDataSelectedOnly: CryptoDataSelected[] = [];

  private updateTableData() {
    this.tableData = [];
    for (let e of this.coinData.getCryptoData()) {
      if (this.userSelected.getUserSelected().includes(e.id)) {
        this.tableData.push({ ...e, isSelected: true });
      } else {
        this.tableData.push({ ...e, isSelected: false });
      }
    }
  }

  private updateTableDataSelectedOnly() {
    this.tableDataSelectedOnly = [];
    this.tableData.forEach((e: any) => {
      if (e.isSelected) {
        this.tableDataSelectedOnly.push(e);
      }
    });
  }

  public updateData() {
    this.updateTableData();
    this.updateTableDataSelectedOnly();
  }

  public getTableData() {
    return this.tableData;
  }

  public getTableDataSelectedOnly() {
    return this.tableDataSelectedOnly;
  }

  notifierSubscription: Subscription =
    this.userSelected.subjectNotifier.subscribe((notified) => {
      this.updateData();
      console.log(this.updateTableData);
    });

  constructor(
    private coinData: CoinDataService,
    private userSelected: UserSelectedService
  ) {
    this.updateData();
  }

  ngOnInit() {
    this.notifierSubscription.unsubscribe();
  }
}

import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CryptoDataSelected } from 'src/app/interfaces/crypto-data-selected';
import { DataService } from 'src/app/services/refresh-data.service';
import { TableDataService } from 'src/app/services/table-data.service';

@Component({
  selector: 'app-my-crypto',
  templateUrl: './my-crypto.component.html',
  styleUrls: ['./my-crypto.component.scss'],
})
export class MyCryptoComponent implements OnInit {
  dataSelected: CryptoDataSelected[] = [];

  notifierSubscription: Subscription =
    this.dataService.subjectNotifier.subscribe((notified) => {
      this.dataSelected = this.tableData.getTableDataSelectedOnly();
    });



  constructor(
    private tableData: TableDataService,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    this.dataSelected = this.tableData.getTableDataSelectedOnly();
    console.log(this.dataSelected);
  }

  ngOnDestroy() {
    this.notifierSubscription.unsubscribe();

  }
}

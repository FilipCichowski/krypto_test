import { TableDataService } from './../../services/table-data.service';
import { UserSelectedService } from './../../services/user-selected.service';
import { CoinDataService } from './../../services/coin-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popular-crypto',
  templateUrl: './popular-crypto.component.html',
  styleUrls: ['./popular-crypto.component.scss']
})
export class PopularCryptoComponent implements OnInit {
  data: any;

  constructor(private tableData: TableDataService) {
  }

  ngOnInit(): void {
    this.data = this.tableData.getTableData();
  }
}

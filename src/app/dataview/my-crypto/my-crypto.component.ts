import { Component, OnInit } from '@angular/core';
import { CryptoDataSelected } from 'src/app/interfaces/crypto-data-selected';
import { TableDataService } from 'src/app/services/table-data.service';

@Component({
  selector: 'app-my-crypto',
  templateUrl: './my-crypto.component.html',
  styleUrls: ['./my-crypto.component.scss'],
})
export class MyCryptoComponent implements OnInit {
  dataSelected: CryptoDataSelected[] = [];

  constructor(private tableData: TableDataService) {}

  ngOnInit(): void {
    this.dataSelected = this.tableData.getTableDataSelectedOnly();
    console.log(this.dataSelected);
  }
}

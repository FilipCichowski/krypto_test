import { CryptoData } from './../../interfaces/crypto-data';
import { CoinDataService } from './../../services/coin-data.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-cryptop-dialog',
  templateUrl: './add-cryptop-dialog.component.html',
  styleUrls: ['./add-cryptop-dialog.component.scss']
})
export class AddCryptopDialogComponent implements OnInit {
  @Input()
  availableCrypto: CryptoData[] = [];

  constructor(private cryptoData: CoinDataService) { }

  ngOnInit(): void {
    this.availableCrypto = this.cryptoData.getCryptoData();
  }

}

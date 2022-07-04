import { CoinDataService } from './../../services/coin-data.service';
import { Component, OnInit } from '@angular/core';
import { CryptoData } from 'src/app/services/coin-data.service';

@Component({
  selector: 'app-popular-crypto',
  templateUrl: './popular-crypto.component.html',
  styleUrls: ['./popular-crypto.component.scss']
})
export class PopularCryptoComponent implements OnInit {
  cryptoData: any;

  constructor(private coinData: CoinDataService) { }

  ngOnInit(): void {
    this.coinData.refreshCryptoData();
    this.cryptoData = this.coinData.getCryptoData();  
  }
}

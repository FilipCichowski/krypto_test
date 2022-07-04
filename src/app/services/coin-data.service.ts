import { Injectable } from '@angular/core';
import { MostPopularCryptoService } from './most-popular-crypto.service';
import { HttpClient } from '@angular/common/http';

export interface CryptoData {
  symbol: string,
  name: string,
  price: number,
  low: number,
  high: number,
  marketCap: number
}

@Injectable({
  providedIn: 'root',
})
export class CoinDataService {
  private url: string = 'https://api.coingecko.com/api/v3/coins/';
  private cryptoData: CryptoData[] = [];

  refreshCryptoData() {
    this.mostPopularCrypto.getUserSelected().forEach(id => {
      this.getApiData(id).subscribe((data) => {
        let singleCryptoInfo: CryptoData = {} as CryptoData;
        singleCryptoInfo.symbol = data.symbol;
        singleCryptoInfo.name = data.name;
        singleCryptoInfo.price = data.market_data.current_price.usd;
        singleCryptoInfo.low = data.market_data.low_24h.usd;
        singleCryptoInfo.high = data.market_data.high_24h.usd;
        singleCryptoInfo.marketCap = data.market_cap_rank;
        this.cryptoData.push(singleCryptoInfo);
      })
    })
  }

  public getApiData(id: string) {
    return this.httpClient.get<any>(this.url + id);
  }

  getCryptoData() {
    return this.cryptoData;
  }

  constructor(
    private httpClient: HttpClient, private mostPopularCrypto: MostPopularCryptoService
  ) {}
}

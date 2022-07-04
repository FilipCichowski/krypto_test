import { Injectable } from '@angular/core';
import { MostPopularCryptoService } from './most-popular-crypto.service';
import { HttpClient } from '@angular/common/http';

export interface CryptoData {
  symbol: string,
  name: string,
  price: number,
  low: number,
  high: number,
  marketCap: number,
  img: string,
  isSelected: boolean
}

@Injectable({
  providedIn: 'root',
})
export class CoinDataService {
  private url: string = 'https://api.coingecko.com/api/v3/coins/';
  private cryptoData: CryptoData[] = [];

  // refreshCryptoData() {
  //   this.mostPopularCrypto.getMostPopular().forEach(id => {
  //     this.getApiData(id).subscribe((data) => {
  //       console.log(data);
  //       let singleCryptoInfo: CryptoData = {} as CryptoData;
  //       singleCryptoInfo.symbol = data.symbol;
  //       singleCryptoInfo.name = data.name;
  //       singleCryptoInfo.price = data.market_data.current_price.usd;
  //       singleCryptoInfo.low = data.market_data.low_24h.usd;
  //       singleCryptoInfo.high = data.market_data.high_24h.usd;
  //       singleCryptoInfo.marketCap = data.market_cap_rank;
  //       this.cryptoData.push(singleCryptoInfo);
  //     })
  //   })
  // }

  // just for debugging purpose
  refreshCryptoData() {
    this.mostPopularCrypto.getMostPopular().forEach(id => {
      let singleCryptoInfo: CryptoData = {} as CryptoData;
        singleCryptoInfo.symbol = id
        singleCryptoInfo.name = id
        singleCryptoInfo.price = 2137
        singleCryptoInfo.low = 69
        singleCryptoInfo.high = 420
        singleCryptoInfo.marketCap = 7
        singleCryptoInfo.img = "https://assets.coingecko.com/coins/images/1/thumb/bitcoin.png?1547033579"
        singleCryptoInfo.isSelected = true;
        this.cryptoData.push(singleCryptoInfo);
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
  ) {
    this.refreshCryptoData();
  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MostPopularCryptoService {
  // most common cryptos available for user
  private mostPopular: string[] = ["bitcoin", "ethereum", "tether", "dogecoin", "solana", "cardano", "ripple", "litecoin", "stellar", "monero", "unbanked", "umi-digital", "unifi-protocol", "unlend-finance", "velaspad", "veusd", 	"datakyc", "cyn-c"];

  public getMostPopular() {
    return this.mostPopular;
  }

  constructor() { }
}

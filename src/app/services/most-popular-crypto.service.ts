import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MostPopularCryptoService {
  // most common cryptos available for user
  private userSelected: string[] = ["bitcoin", "ethereum", "tether", "dogecoin", "solana", "cardano", "ripple", "litecoin", "stellar"];

  public getUserSelected() {
    return this.userSelected;
  }
  
  constructor() { }
}

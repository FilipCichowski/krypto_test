import { UserSelectedService } from './../../services/user-selected.service';
import { CryptoData } from './../../interfaces/crypto-data';
import { CoinDataService } from './../../services/coin-data.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-cryptop-dialog',
  templateUrl: './add-cryptop-dialog.component.html',
  styleUrls: ['./add-cryptop-dialog.component.scss'],
})
export class AddCryptopDialogComponent implements OnInit {
  @Input()
  availableCrypto: CryptoData[] = [];
  selectedValue: string = '';

  onSelectionValueChange(value: string) {
    this.selectedValue = value;
  }

  notifyForChange() {
    this.userSelected.notifyAboutChange();
  }

  saveValue() {
    this.userSelected.addUserSelected(this.selectedValue);
    this.notifyForChange();
    console.log(this.userSelected.getUserSelected());
  }

  constructor(
    private cryptoData: CoinDataService,
    private userSelected: UserSelectedService
  ) {}

  ngOnInit(): void {
    this.availableCrypto = this.cryptoData.getCryptoData();
  }
}

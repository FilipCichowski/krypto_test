import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ActiveButtonService {
  private buttonsData = [
    {
      icon: 'space_dashboard',
      text: 'Popularne kryptowaluty',
      badgeNumber: null,
      id: 1,
    },
    {
      icon: 'savings',
      text: 'Moje kryptowaluty',
      badgeNumber: 4,
      id: 2,
    },
  ];

  private selectedItem = this.buttonsData[0];

  private notify = new BehaviorSubject<any>('');

  notifyObservable$ = this.notify.asObservable();

  public notifyOther(data: any) {
    if (data) {
      this.notify.next(data);
    }
  }

  public getSelectedItem() {
    return this.selectedItem;
  }

  public getButtonData() {
    return this.buttonsData;
  }

  public setSelectedItem(item: any) {
    this.selectedItem = item;
  }

  constructor() {}
}

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActiveButtonService {
  public notify = new BehaviorSubject<any>('');

  notifyObservable$ = this.notify.asObservable();

  public notifyOther(data: any) {
    if (data) {
        this.notify.next(data);
    }
  } 

  private buttonsData = [
    {
      "icon": "space_dashboard",
      "text": "Popularne kryptowaluty",
      "badgeNumber": null,
      "id": 1
    },
    {
      "icon": "savings",
      "text": 'Moje kryptowaluty',
      "badgeNumber": 4,
      "id": 2
    },
  ];

  private selectedItem = this.buttonsData[0];

  getSelectedItem() {
    return this.selectedItem;
  }

  getButtonData() {
    return this.buttonsData;
  }

  setSelectedItem(item: any) {
    this.selectedItem = item;
  }
  
  constructor() { }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserSelectedService {
  // mock user's crypto data
  private userSelected: string[] = ["bitcoin", "ethereum", "tether", "dogecoin"];

  public removeSelectedById(id: string) {
    this.userSelected.splice(this.userSelected.findIndex(e => e === id), 1);
  }

  public addUserSelected(id: string) {
    this.userSelected.push(id);
  }

  public getUserSelected() {
    return this.userSelected;
  }

  constructor() { }
}

import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserSelectedService {
  subjectNotifier: Subject<null> = new Subject<null>();
  // mock user's crypto data
  private userSelected: string[] = [
    'bitcoin',
    'ethereum',
    'tether',
    'dogecoin',
  ];

  notifyAboutChange() {
    this.subjectNotifier.next(null);
  }

  public removeSelectedById(id: string) {
    this.userSelected.splice(
      this.userSelected.findIndex((e) => e === id),
      1
    );
  }

  public addUserSelected(id: string) {
    if (!this.userSelected.includes(id)) {
      this.userSelected.push(id);
    }
  }

  public getUserSelected() {
    return this.userSelected;
  }

  constructor() {}
}

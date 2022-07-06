import { UserSelectedService } from './user-selected.service';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DeleteButtonStateService {
  subjectNotifier: Subject<null> = new Subject<null>();
  disableDelete: boolean = true;

  setButtonState(state: boolean) {
    this.disableDelete = state;
  }

  requestButtonStateChange(id: string) {
    if (this.userSelected.getUserSelected().includes(id)) {
      this.setButtonState(false);
    } else {
      this.setButtonState(true);
    }
  }

  getButtonState() {
    return this.disableDelete;
  }

  notifyAboutChange() {
    this.subjectNotifier.next(null);
  }

  constructor(private userSelected: UserSelectedService ) {}
}

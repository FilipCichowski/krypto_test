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

  requestButtonStateChangeAndNotify(id: string) {
    const previousState = this.disableDelete;
    if (this.userSelected.getUserSelected().includes(id)) {
      this.setButtonState(false);
    } else {
      this.setButtonState(true);
    }
    if (previousState !== this.disableDelete) {
      return true;
    } else {
      return false
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

import { Injectable, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';

@Injectable({
  providedIn: 'root'
})
export class EventEmitterService {
  invokeGetSelectedItem = new EventEmitter();
  subsVar: Subscription | undefined;

  constructor() { }

  onInvokeGetSelectedItem() {
    this.invokeGetSelectedItem.emit();
  }
}

import { Component, OnInit, Output } from '@angular/core';
import { EventEmitterService } from '../event-emitter.service';

@Component({
  selector: 'app-dataview',
  templateUrl: './dataview.component.html',
  styleUrls: ['./dataview.component.scss'],
})
export class DataviewComponent implements OnInit {

  constructor(private eventEmitterService: EventEmitterService) {}

  ngOnInit(): void {}

  getSelected() {
    this.eventEmitterService.onInvokeGetSelectedItem();
  }
}

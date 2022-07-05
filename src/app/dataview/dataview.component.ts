import { Component, OnInit } from '@angular/core';
import { ActiveButtonService } from '../services/active-button.service';

@Component({
  selector: 'app-dataview',
  templateUrl: './dataview.component.html',
  styleUrls: ['./dataview.component.scss'],
})
export class DataviewComponent implements OnInit {
  activeElementId!: number;

  constructor(private activeButtonService: ActiveButtonService) {}

  ngOnInit(): void {
    // initialize component with data first time
    this.activeElementId = this.activeButtonService.getSelectedItem().id;
    // update component if active data was changed
    this.activeButtonService.notifyObservable$.subscribe((res) => {
      if (res.refresh) {
        this.activeElementId = this.activeButtonService.getSelectedItem().id;
      }
    });
  }
}

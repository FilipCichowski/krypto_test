import { ActiveButtonService } from '../../services/active-button.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-selector',
  templateUrl: './view-selector.component.html',
  styleUrls: ['./view-selector.component.scss'],
})
export class ViewSelectorComponent implements OnInit {

  onClick(item: any) {
    this.activeButtonService.setSelectedItem(item);
    this.activeButtonService.notifyOther({refresh: true});
  }

  getSelectedItem() {
    return this.activeButtonService.getSelectedItem();
  }

  constructor(private activeButtonService: ActiveButtonService) { }   
   
  getButtonData() {
    return this.activeButtonService.getButtonData();
  }
    
  ngOnInit() { }     
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-selector',
  templateUrl: './view-selector.component.html',
  styleUrls: ['./view-selector.component.scss'],
})
export class ViewSelectorComponent implements OnInit {
  buttonsData = [
    {
      icon: 'space_dashboard',
      text: 'Popularne kryptowaluty',
      badgeNumber: null,
    },
    {
      icon: 'savings',
      text: 'Moje kryptowaluty',
      badgeNumber: 4,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}

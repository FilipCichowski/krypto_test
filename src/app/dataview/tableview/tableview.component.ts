import { Component, OnInit, Input } from '@angular/core';
import { CryptoDataSelected } from 'src/app/interfaces/crypto-data-selected';

@Component({
  selector: 'app-tableview',
  templateUrl: './tableview.component.html',
  styleUrls: ['./tableview.component.scss'],
})
export class TableviewComponent implements OnInit {
  @Input()
  data!: CryptoDataSelected[];

  constructor() {}

  ngOnInit(): void {}
}

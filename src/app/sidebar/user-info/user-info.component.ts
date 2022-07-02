import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {
  imagePath: string = "../../../assets/img/pexels-stefan-stefancik-91227.jpg";
  altText: string = "user avatar";
  userName: string = "Jan Kowalski";
  userTitle: string = "Programista-Filantrop";
  
  constructor() { }

  ngOnInit(): void {
  }

}

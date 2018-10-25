import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  h1Style: Boolean = true;
  constructor(private data: DataService) { }
  users: Object;

  ngOnInit() {
    // this.data.getUsers();
    this.data.getUsers().subscribe(data => {
      console.log('data', data);
      this.users = data;
    });
  }
  clickMe() {
    this.h1Style = !this.h1Style;
    this.data.clickMe();
  }

}

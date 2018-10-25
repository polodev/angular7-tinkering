import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  user: Object;
  userId: Object;
  constructor(private ds: DataService, private ar: ActivatedRoute) {
    this.ar.params.subscribe(params => this.userId = params.id);
   }

  ngOnInit() {
    this.ds.getUser(this.userId).subscribe(data => {
      this.user = data;
    });
  }

}

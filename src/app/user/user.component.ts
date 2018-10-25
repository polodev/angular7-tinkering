import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  user: any;
  userId: any;
  loading: boolean = false;
  constructor(private ds: DataService, private ar: ActivatedRoute) {
    this.ar.params.subscribe(params => this.userId = params.id);
   }

  ngOnInit() {
    this.loading = true;
    this.ds.getUser(this.userId).subscribe(data => {
      this.loading = false;
      this.user = data;
    });
  }

}

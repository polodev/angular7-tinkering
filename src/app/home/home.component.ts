import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('listStagger', [
      transition('* <=> *', [
        query(
          ':enter',
          [
            style({ opacity: 0, transform: 'translateY(-15px)' }),
            stagger(
              '50ms',
              animate(
                '550ms ease-out',
                style({ opacity: 1, transform: 'translateY(0px)' })
              )
            )
          ],
          { optional: true }
        ),
        query(':leave', animate('50ms', style({ opacity: 0 })), {
          optional: true
        })
      ])
    ])
  ]
})
interface UsersData {
  'page': number;
  'per_page': number;
  'total': number;
  'total_pages': number;
  'data': object;
}
export class HomeComponent implements OnInit {

  h1Style: Boolean = true;
  constructor(private data: DataService) { }
  users: Object;
  loading: Boolean = false;
  hasNext = false;
  hasPrev = false;

  ngOnInit() {
    // this.data.getUsers();
    this.loading = true;
    this.data.getUsers().subscribe((data: UsersData) => {
      console.log('data', data);
      this.users = data;
      this.loading = false;
      data.page === 1 ? this.hasPrev = false : this.hasPrev = true;
      data.page < data.total_pages ? this.hasNext = true : this.hasNext = false;
    });
  }
  clickMe() {
    this.h1Style = !this.h1Style;
    this.data.clickMe();
  }

}

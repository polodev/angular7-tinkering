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
export class HomeComponent implements OnInit {

  h1Style: Boolean = true;
  constructor(private data: DataService) { }
  users: Object;
  loading: Boolean = false;

  ngOnInit() {
    // this.data.getUsers();
    this.loading = true;
    this.data.getUsers().subscribe(data => {
      console.log('data', data);
      this.users = data;
      this.loading = false;
    });
  }
  clickMe() {
    this.h1Style = !this.h1Style;
    this.data.clickMe();
  }

}

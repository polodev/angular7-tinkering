import { Component, OnInit } from '@angular/core';
import {Router, NavigationEnd} from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  appTitle = 'myapp';
  currentUrl: string;
  constructor(private router: Router) {
    // router.events.subscribe(() => {
    //   this.currentUrl = router.url;
    // });

    router.events.subscribe(event => {
        if (event instanceof NavigationEnd) {
          this.currentUrl = event.url;
        }
    });

  }
  ngOnInit() {
  }

}

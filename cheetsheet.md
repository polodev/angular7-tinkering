# getting Id from route parameters

~~~js
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

~~~



# routerLink varible link

~~~html
<a [routerLink]="['user', user.id]">
  link text
</a>
<!-- or -->
<a routerLink="/details/{{user.id}}">{{ user.name }}</a>
~~~


# activated nav bar link

~~~js
// navbar Component js
mport { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

export class SidebarComponent implements OnInit {

  currentUrl: string;

  constructor(private router: Router) {
    router.events.subscribe((_: NavigationEnd) => this.currentUrl = _.url);
  }

  ngOnInit() {}

}
~~~

~~~html
<!-- navbar Component html -->
<nav>
  <ul>
    <li>
      <a routerLink="" [class.activated]="currentUrl == '/'">
        <i class="material-icons">supervised_user_circle</i>
      </a>
    </li>
    <li>
      <a routerLink="posts" [class.activated]="currentUrl == '/posts'">
        <i class="material-icons">message</i>
      </a>
    </li>
  </ul>
</nav>
~~~


# change output path dist
~~~js
// changed following line form angular.json file
// "outputPath": "docs",
"build": {
  "builder": "@angular-devkit/build-angular:browser",
  "options": {
    "outputPath": "docs",
    "baseHref" : "",
    "deployUrl": "angular7-tinkering",
  }
}
~~~

# change base url in angular

~~~js
// deployUrl is my baseUrl
"build": {
  "builder": "@angular-devkit/build-angular:browser",
  "options": {
    "outputPath": "docs",
    "baseHref" : "",
    "deployUrl": "/angular7-tinkering/",
  }
}
~~~





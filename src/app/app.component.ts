
import { Component, OnInit, OnDestroy, DoCheck } from '@angular/core';
import { AuthenticationService } from './login/auth.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent  implements OnInit, OnDestroy {

  title = 'PREEMOO PIZZA';
  isLoggedIn = false;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.isLoggedIn = this.authenticationService.isUserLoggedIn();
    console.log('menu ->' + this.isLoggedIn);
  }

  ngDoCheck() {
    this.isLoggedIn = this.authenticationService.isUserLoggedIn();
    console.log('menu ->' + this.isLoggedIn);
  }

  handleLogout() {
    this.authenticationService.logout();
  }

  ngOnDestroy() {

  }
  
}

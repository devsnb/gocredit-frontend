import { Component, DoCheck, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Role } from 'src/app/models/role';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit, DoCheck {
  isAdmin: boolean = false;
  isUser: boolean = false;
  isLogin: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}
  ngDoCheck(): void {
    // throw new Error('Method not implemented.');
    this.authService.getLoggedInUser().subscribe((user) => {
      this.isAdmin = user?.role == Role.ADMIN ? true : false;
    });

    this.authService.getLoggedInUser().subscribe((user) => {
      this.isUser = user ? true : false;
    });
  }

  logout() {
    this.authService.logOut();
    this.router.navigate(['/']);
  }

  ngOnInit(): void {}
}

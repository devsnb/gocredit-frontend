import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthService, private _router: Router) {}

  user!: User;

  ngOnInit(): void {}

  onLoginWithContact = (loginForm: NgForm) => {
    let user = loginForm.value;

    this.authService
      .loginWithContact(user.contact, user.password)
      .subscribe((data) => {
        console.log(data);
        this.user = data;
        this._router.navigate(['/home']);
      });
  };

  onLoginWithEmail = (form: NgForm) => {
    let user = form.value;

    this.authService
      .loginWithEmail(user.email, user.password)
      .subscribe((data) => {
        console.log(data);
        this.user = data;
        this._router.navigate(['/home']);
      });
  };
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent implements OnInit {
  constructor(public router: Router) {}

  ngOnInit(): void {}
  details() {
    console.log('database');
    this.router.navigate(['/me/credit-cards']);
  }
}

import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { from, Observable } from 'rxjs';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent {
  constructor(private authService: AuthService) {}

  signUp(form: NgForm) {
    const user: User = {
      name: form.value.name,
      email: form.value.email,
      contactNumber: form.value.contactNumber,
      creditcards: new Set(),
      dataOfBirth: form.value.dateOfBirth.toISOString().substring(0, 10),
      password: form.value.password,
      address: {
        city: form.value.city,
        doorNo: form.value.doorNo,
        state: form.value.state,
        streetName: form.value.streetName,
        zipcode: form.value.zipcode,
      },
    };

    console.log(user);

    this.authService.signUp(user).subscribe((data) => {
      console.log(data);
    });
  }
}

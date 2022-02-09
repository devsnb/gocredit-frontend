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
  successful: boolean = false;
  constructor(private authService: AuthService) {}

  signUp(form: NgForm) {
    const user = {
      name: form.value.name,
      email: form.value.email,
      contactNumber: form.value.contactNumber,
      dateOfBirth: form.value.dateOfBirth,
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
    // @ts-ignore:next-line
    this.authService.signUp(user).subscribe((data) => {
      console.log(data);
      if (data) this.successful = true;
    });
  }
}

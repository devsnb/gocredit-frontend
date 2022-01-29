import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
})
export class UserDetailsComponent implements OnInit {
  usersId!: number;
  user!: User;

  constructor(
    private adminService: AdminService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((map) => {
      let id = map.get('id');
      if (id) this.usersId = parseInt(map.get('id')!);
    });
    if (this.usersId)
      this.adminService.getById(this.usersId).subscribe((data: User) => {
        this.user = data;
      });
  }
}

import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';

interface UserElement {
  id: number;
  name: string;
  contactNumber: number;
  email: string;
}

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'contactNumber', 'email'];
  dataSource: UserElement[] = [];

  constructor(private adminService: AdminService) {}

  ngOnInit(): void {
    this.adminService.getAllUsers().subscribe((data) => {
      this.dataSource = data.map<UserElement>((data) => {
        const formattedUser: UserElement = {
          id: data.userId!,
          name: data.name,
          contactNumber: data.contactNumber,
          email: data.email,
        };
        return formattedUser;
      });
    });
  }
}

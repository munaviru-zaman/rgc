import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../services/utility.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-all-user',
  templateUrl: './all-user.component.html',
  styleUrls: ['./all-user.component.css'],
})
export class AllUserComponent implements OnInit {
  userList: any;
  totalUsers: any;
  constructor(private service: UtilityService, private router: Router) {}

  ngOnInit(): void {
    this.getUsers();
    this.totalUsers = this.userList.length;
  }
  getUsers() {
    this.userList = this.service.getUsers();
  }
  deleteUser(i: number) {
    this.service.deleteUser(i);
  }
  updateUser(index: number) {
    this.router.navigate(['dashboard/add/update'], {
      queryParams: { user: index },
    });
  }
}

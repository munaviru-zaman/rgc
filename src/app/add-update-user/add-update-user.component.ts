import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UtilityService } from '../services/utility.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-add-update-user',
  templateUrl: './add-update-user.component.html',
  styleUrls: ['./add-update-user.component.css'],
})
export class AddUpdateUserComponent implements OnInit {
  userForm = this.form.group({
    userId: ['', [Validators.required]],
    name: ['', [Validators.required]],
    gender: ['', [Validators.required]],
    contact: ['', [Validators.required]],
  });

  userId: any;
  name: any;
  gender: any;
  contact: any;
  userIndex: number | undefined;
  saveFlag: boolean = true;
  user: any;
  constructor(
    private form: FormBuilder,
    private service: UtilityService,
    private router: Router,
    private actRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.checkParams();
  }

  checkParams(): void {
    this.actRoute.queryParams.subscribe((res: Params) => {
      this.userIndex = parseInt(res['user']);
      if (this.userIndex >= 0) {
        this.saveFlag = false;
        console.log(this.saveFlag);
        this.getUser();
      }
    });
  }

  getUser() {
    this.user = this.service.getUser(this.userIndex as number);
    this.userId = this.user.userId;
    this.name = this.user.name;
    this.gender = this.user.gender;
    this.contact = this.user.contact;
  }

  submit(userData: any): void {
    if (this.userForm.valid) {
      if (!this.saveFlag) {
        console.log('index', this.userIndex);

        this.service.updateUser(this.userIndex as number, userData);
        this.router.navigate(['/dashboard/user']);
        this.saveFlag = true;
        this.userIndex = undefined;
      } else {
        this.service.addUser(userData);
        this.router.navigate(['/dashboard/user']);
      }
    } else {
      alert('Fill the form completely');
    }
  }
  cancel() {
    this.router.navigate(['dashboard/user']);
  }
}

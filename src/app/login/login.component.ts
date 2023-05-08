import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm = this.form.group({
    userId: ['', [Validators.required]],
    password: ['', [Validators.required]],
  });
  constructor(private form: FormBuilder, private router: Router) {}

  ngOnInit(): void {}
  login(data: any) {
    if (data.userId == 'admin001') {
      if (data.password == '12345') {
        localStorage.setItem('login', JSON.stringify(data));
        this.router.navigate(['dashboard']);
      } else {
        alert('Wrong Password');
      }
    } else {
      alert('Admin Does Not Exist');
    }
  }
}

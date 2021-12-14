import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import {GlobalService} from '../global.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginFormGroup: FormGroup;
  isValidLogin = true;
  constructor(private router: Router, private globalService: GlobalService) { }

  ngOnInit(): void {
    this.loginFormGroup = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  login(): void {
    if (this.loginFormGroup.get('username').value === 'sh2022' && this.loginFormGroup.get('password').value === 'burn') {
      this.isValidLogin = true;
      this.router.navigate(['/main']);
      localStorage.setItem('loggedIn', 'loggedIn');
      this.globalService.isLoggedIn = true;
    } else {
      this.isValidLogin = false;
      this.resetForm();
      this.globalService.isLoggedIn = false;
    }
  }

  resetForm(): void {
    this.loginFormGroup.reset();
  }

}

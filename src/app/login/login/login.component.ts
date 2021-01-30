import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { BookService } from 'src/app/services/book.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

   loginForm: any;
  error = false;
  constructor(private apiService: LoginService,
    private router: Router,
    private formBuilder: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
  }
  createForm() {
    this.loginForm = this.formBuilder.group({
      email: '',
      password: ''
    });
  }
  login(email:any,password:any): void {
    this.apiService.login(email.value,password.value).
      subscribe(res => {
        if (res.status == "Success"  ) {
          this.router.navigate(['/home']);
          this.error = false;
        } else if (res.status !== 'Success') {
          this.router.navigate(['/login']);
          this.error = true;
        }
      },
        err => {
          this.router.navigate(['/login']);
      });
  }

}

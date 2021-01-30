import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

   registerForm: any;
  constructor(private apiService: LoginService,
    private router: Router,
    private formBuilder: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
  }
  createForm() {
    this.registerForm = this.formBuilder.group({
      email: '',
      password: '',
      username: '',
      age: '',
      usertype: 'customer'
    });
  }
  register(email:any,username:any,password:any,age:any): void {

    this.apiService.register(email.value,username.value,password.value,age.value).
      subscribe(res => {
        console.log(res.status)
        console.log(res)
        if (res.status == "Success" ) {
          this.router.navigate(['/login']);
        } else if (res.status !== 'Success') {
          this.router.navigate(['/register']);
        }
      },
        err => {
          console.log(err)
          this.router.navigate(['/register']);
      });
  }

}

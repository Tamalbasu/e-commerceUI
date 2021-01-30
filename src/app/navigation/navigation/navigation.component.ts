import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  @Input() public loggedType;
  constructor(private auth: LoginService, private route: Router) {
    this.loggedType = 'home';
   
  }

  ngOnInit() {
    //console.log(this.auth.getAuthType());

  }
  logout() {
    this.loggedType = "home";
   
    this.route.navigate(['/login']);
  }


}

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  goToPage(pageName:string){
    this.router.navigate([`${pageName}`]);
  }

  constructor(private router: Router){
  }

}

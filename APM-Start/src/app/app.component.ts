import { Component } from '@angular/core';
import { AuthService } from './users/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'pm-root',
  templateUrl: './app.component.html'
})
export class AppComponent {  
  pageTitle: string = 'Acme Product Management';

  constructor(private authService: AuthService, private router: Router){
  }

  logout(): void{
    this.authService.logout();
    this.router.navigateByUrl('/welcome');
    console.log('logout !!!');
  }
}

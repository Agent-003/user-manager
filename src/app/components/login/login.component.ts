import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username = '';
  password='';

  constructor(private authService: AuthService,
    private router: Router,
    ) { }

  validateLogin() {
    this.authService.getUserId(this.username, this.password).subscribe(
      (data: { userId, token }) => {
        if (data.userId) {
          this.router.navigate([`${data.userId}`]);
        }
      }, error => console.log('ERROR: ', error)
    )
  }



}

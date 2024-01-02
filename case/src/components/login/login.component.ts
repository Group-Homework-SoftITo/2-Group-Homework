import { Component } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { CommonModule } from '@angular/common';
import { User } from '../../models/User';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  user:User = { userName: '', password: '' };
  constructor(private authenticationService:AuthenticationService){
  }
  login() {
    const isLoggedIn = this.authenticationService.login(this.user);
    if (isLoggedIn) {
      console.log('Giriş başarılı!');
    } else {
      console.log('Giriş başarısız!');
    }
  }
}

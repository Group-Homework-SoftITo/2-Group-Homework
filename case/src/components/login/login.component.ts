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
<<<<<<< HEAD
  private isLoggedIn = false;

  login(email: string, password: string): boolean {

    if (email === 'user@example.com' && password === 'password') {
      this.isLoggedIn = true;
      return true;
    }
    return false;
  }

  logout(): void {
    this.isLoggedIn = false;
  }

  isAuthenticated(): boolean {
    return this.isLoggedIn;
=======
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
>>>>>>> 4ed2d5427fa5544ffc07e9b8961b3650d1a04a5f
  }
}

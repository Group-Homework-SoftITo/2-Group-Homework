import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
<<<<<<< HEAD
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from '../components/login/login.component';
=======
import { RouterLink, RouterOutlet } from '@angular/router';
>>>>>>> 4ed2d5427fa5544ffc07e9b8961b3650d1a04a5f

@Component({
  selector: 'app-root',
  standalone: true,
<<<<<<< HEAD
  imports: [CommonModule, RouterOutlet, LoginComponent],
=======
  imports: [CommonModule, RouterOutlet,RouterLink],
>>>>>>> 4ed2d5427fa5544ffc07e9b8961b3650d1a04a5f
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
  
  }
  title = 'case';
  object ={
    id:1,
    name:"test",
    surname:"ahraz",
    age:31
  }
  
}

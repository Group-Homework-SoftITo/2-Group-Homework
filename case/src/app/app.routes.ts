import { Routes } from '@angular/router';
<<<<<<< HEAD
import { LoginComponent } from '../components/login/login.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent }
=======
import path from 'node:path';
import { LoginComponent } from '../components/login/login.component';
import { RegisterComponent } from '../components/register/register.component';

export const routes: Routes = [
   { path:"login", component:LoginComponent},
   { path:"register", component:RegisterComponent},
>>>>>>> 4ed2d5427fa5544ffc07e9b8961b3650d1a04a5f
];

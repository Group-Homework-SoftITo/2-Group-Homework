import { Routes } from '@angular/router';
import path from 'node:path';
import { LoginComponent } from '../components/login/login.component';
import { RegisterComponent } from '../components/register/register.component';

export const routes: Routes = [
   { path:"login", component:LoginComponent},
   { path:"register", component:RegisterComponent},
];

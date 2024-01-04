import { Injectable } from '@angular/core';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }
  isLogged:boolean =false;
  login(user:User):boolean{
    if( (user.userName==="softito") && (user.password === "softito") ){
     this.isLogged=true;
     localStorage.setItem("isLogged","true");
     localStorage.setItem("userName", user.userName);
  
      return true
    }
   return false;
  }
  logout():void{
    this.isLogged=false;
    localStorage.removeItem("isLogged");
    localStorage.removeItem("userName");

  }
  isLoggedIn():boolean{
    return localStorage.getItem("isLogged") ==="true";
  }
  register(newUser:User):boolean{
    const existingUser=localStorage.getItem("userName");
    if(!existingUser){
      localStorage.setItem("userName", newUser.userName);
      localStorage.setItem("userPassword", newUser.password);
      return true;
    }
    return false;
  }

}


import { Injectable } from '@angular/core';
import{Auth, createUserWithEmailAndPassword,signInWithEmailAndPassword} from '@angular/fire/auth';


export interface User{
  email:string;
  password:string;

}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _auth= inject(Auth);

  signUp(User:User ){
    return createUserWithEmailAndPassword(this._auth, User.email, User.password);
  }
  signIn(user:User){
    return signInWithEmailAndPassword(this._auth,user.email, user.password);
  }
}

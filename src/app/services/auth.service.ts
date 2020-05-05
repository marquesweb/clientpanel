import { Injectable } from '@angular/core';
import { auth } from  'firebase/app';
import { AngularFireAuth } from  "@angular/fire/auth";
import { User } from  'firebase';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: User;

  constructor(private  afAuth:  AngularFireAuth) {}

  login(email: string, password: string) {
    return new Promise((resolve, reject) => {
      this.afAuth.signInWithEmailAndPassword(email, password)
      .then(userData => {
        resolve(userData),
        err => reject(err)
      })
    })
  }

  register(email: string, password: string) {
    return new Promise((resolve, reject) => {
      this.afAuth.createUserWithEmailAndPassword(email, password)
      .then(userData => {
        resolve(userData),
        err => reject(err)
      })
    })
  }

  getAuth() {
    return this.afAuth.authState.pipe(auth => auth)
  }

  
  logout() {
    this.afAuth.signOut();
  }
}

import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth) {}

  googleSignIn() {
    return this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
  }

  emailSignup({ email, password }) {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
  }
  
  emailLogin({ email, password }) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password)
  }

  logOut() {
    return this.afAuth.auth.signOut()
  }

  authState() {
    return this.afAuth.authState
  }
  
}

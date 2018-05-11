import { Component } from '@angular/core';
import { AuthService } from "../core/auth.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private auth: AuthService) { }

  signIn() {
    this.auth.googleSignIn().then(res => {
      console.log(res.user, res.additionalUserInfo)
    })
    .catch(err => {
      console.warn(err)
    })
    .then(() => {
      this.auth.authState().subscribe(res => {
        console.log("AuthState", res)
      })
    })
  }

  logOut() {
    this.auth.logOut()
  }

}

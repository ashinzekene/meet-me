import { Component, OnInit } from '@angular/core';
import { AuthService } from "../core/auth.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private auth: AuthService) { }

  signIn() {
    this.auth.googleSignIn().then(res => {
      console.log(res)
    })
    .catch(err => {
      console.warn(err)
    })
  }

  ngOnInit() {
  }

}

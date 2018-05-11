import { Component, OnInit } from '@angular/core';
import { AuthService } from './core/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  isAuth: boolean = false;
  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.auth.authState().subscribe(res => {
      this.isAuth = !!res && !!res.email
    })
  }

}

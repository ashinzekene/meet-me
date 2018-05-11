import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: any = {}
  
  constructor(private auth: AuthService) { }

  updateProfile() {
    this.auth.updateUser(this.user).then(res => {
      console.log("Updated", res)
    })
    .catch(err => {
      console.log("Could not update", err)
    })
  }

  ngOnInit() {
    this.auth.authState().subscribe(user => {
      this.user = user
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/auth.service';
import { MUser } from '../types/m-user';
import { UserService } from '../core/user.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: Partial<MUser> = {}

  constructor(private auth: AuthService, private userDB: UserService, private snackbar: MatSnackBar) { }

  async updateProfile() {
    try {
      await this.userDB.create(this.user)
      this.snackbar.open("Updated your profile", "Done", {
        duration: 3000
      })
    } catch (err) {
      console.log("Could not update", err)
    }
  }

  ngOnInit() {
    let duser: Partial<MUser> = {}
    this.auth.authState().switchMap(user => { 
      let { email, emailVerified, uid, displayName, photoURL } = user
      duser.email = email
      duser.emailVerified = emailVerified
      duser.displayName = displayName
      duser.photoURL = photoURL
      duser.uid = uid
      return this.userDB.get(user.uid) 
    })
    .subscribe(dbUser => {
      this.user = !!dbUser ? { ...duser, ...dbUser } : duser
    })
  }

}
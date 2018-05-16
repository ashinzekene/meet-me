import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/auth.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  messages: any[] = []
  userId: string
  message: string = ""

  constructor(private auth: AuthService) { }

  checkForEnter(e: KeyboardEvent) {
    if (e.key === "Enter") this.sendMessage()
  }

  sendMessage() {
    let message = this.message.trim()
    if (message) {
      console.log(message)
      this.messages.push({ userId: this.userId, message })
      this.message = ""
    }
  }
  
  ngOnInit() {
    this.auth.authState().subscribe(user => {
      this.userId = user.uid
    })
  }

}

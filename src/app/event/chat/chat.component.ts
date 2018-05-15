import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  messages: any[] = []

  message: string = ""

  constructor() { }

  checkForEnter(e: KeyboardEvent) {
    console.log(e.key, e.keyCode)
  }

  sendMessage() {
    console.log("CLICKED")
    let message = this.message.trim()
    if (message) {
      this.messages.push({ isUser: Math.random() > 0.5, message })
      this.message = ""
    }
  }
  
  ngOnInit() {
  }

}

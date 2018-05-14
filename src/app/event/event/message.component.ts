import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'chat-message',
  template: `
  <mat-chip-list>
    <mat-chip color="accent" selected="true">Accent fish</mat-chip>
  </mat-chip-list> 
  `
})

export class ChatMessageComponent implements OnInit {
  
  constructor() { }

  ngOnInit() { }
}
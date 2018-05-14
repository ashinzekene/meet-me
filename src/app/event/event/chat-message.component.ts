import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'chat-message',
  styles: [`
  `],
  template: `
  <mat-chip-list>
    <mat-chip *ngIf="isUser; else notUserContent" [color]="primary" selected="true">
      <ng-content></ng-content>
    </mat-chip>
    <ng-template #notUserContent>
      <mat-chip [color]="accent" selected="true">
        <ng-content></ng-content>
      </mat-chip>
    </ng-template>
  </mat-chip-list> 
  `
})

export class ChatMessageComponent implements OnInit {
  @Input() isUser: boolean = false
  constructor() { }

  ngOnInit() { }
}
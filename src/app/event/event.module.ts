import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventRoutingModule } from "./event-routing.module";
import { NgMaterialModule } from '../core/ng-material/ng-material.module';

import { EventComponent } from './event/event.component';
import { ChatComponent } from './chat/chat.component';
import { ChatMessageComponent } from './event/chat-message.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    NgMaterialModule,
    FormsModule,
    EventRoutingModule,
  ],
  declarations: [EventComponent, ChatComponent, ChatMessageComponent]
})
export class EventModule { }

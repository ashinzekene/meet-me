import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventComponent } from './event/event.component';
import { EventRoutingModule } from "./event-routing.module";
import { NgMaterialModule } from '../core/ng-material/ng-material.module';

@NgModule({
  imports: [
    CommonModule,
    NgMaterialModule,
    EventRoutingModule,
  ],
  declarations: [EventComponent]
})
export class EventModule { }

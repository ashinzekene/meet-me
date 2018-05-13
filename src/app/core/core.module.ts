import { NgModule } from '@angular/core';
import { NgMaterialModule } from "./ng-material/ng-material.module";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MainComponent } from "./main/main.component";
import { AuthService } from './auth.service';
import { UserService } from './user.service';
import { EventService } from './event.service';
import { TimeValidatorDirective } from "./time-validator.directive";

@NgModule({
  imports: [NgMaterialModule, CommonModule, FormsModule, ReactiveFormsModule],
  exports: [NgMaterialModule, CommonModule, FormsModule, ReactiveFormsModule],
  declarations: [MainComponent, TimeValidatorDirective],
  providers: [AuthService, UserService, EventService],
})
export class CoreModule { }

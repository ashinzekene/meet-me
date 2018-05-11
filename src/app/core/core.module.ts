import { NgModule } from '@angular/core';
import { NgMaterialModule } from "./ng-material/ng-material.module";
import { CommonModule } from "@angular/common";

import { MainComponent } from "./main/main.component";
import { FormsModule } from '@angular/forms';
import { AuthService } from './auth.service';
import { DatabaseService } from './database.service';

@NgModule({
  imports: [NgMaterialModule, CommonModule, FormsModule],
  exports: [NgMaterialModule, CommonModule, FormsModule],
  declarations: [MainComponent],
  providers: [AuthService, DatabaseService],
})
export class CoreModule { }

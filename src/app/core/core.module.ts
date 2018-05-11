import { NgModule } from '@angular/core';
import { NgMaterialModule } from "./ng-material/ng-material.module";
import { CommonModule } from "@angular/common";

import { MainComponent } from "./main/main.component";

@NgModule({
  imports: [NgMaterialModule, CommonModule],
  exports: [NgMaterialModule, CommonModule],
  declarations: [MainComponent],
  providers: [],
})
export class CoreModule { }

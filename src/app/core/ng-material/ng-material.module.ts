import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatSidenavModule,
  MatToolbarModule,
  MatIconModule,
  MatListModule,
  MatDividerModule,
  MatCardModule,
  MatExpansionModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatNativeDateModule,
  MatInputModule,
  MatStepperModule,
  MatSnackBarModule
} from '@angular/material';

const MATERIAL_MODULES = [
  MatButtonModule,
  MatCheckboxModule,
  MatSidenavModule,
  MatToolbarModule,
  MatIconModule,
  MatListModule,
  MatExpansionModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatInputModule,
  MatNativeDateModule,
  MatCardModule,
  MatDividerModule,
  MatStepperModule,
  MatDatepickerModule,
  MatSnackBarModule,
]

@NgModule({
  imports: [
    MATERIAL_MODULES
  ],
  exports: [
    MATERIAL_MODULES
  ],
})

export class NgMaterialModule { }
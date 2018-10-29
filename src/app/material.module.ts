import { NgModule } from '@angular/core';

import {
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatGridListModule,
    MatRadioModule,
    MatProgressSpinnerModule,
  } from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatGridListModule,
    MatRadioModule,
    MatProgressSpinnerModule
  ],
  exports: [
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatGridListModule,
    MatRadioModule,
    MatProgressSpinnerModule
  ]
})
export class MaterialModule {}

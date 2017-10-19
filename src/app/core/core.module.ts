import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from '@angular/material';

import { StarterComponent } from './starter/starter.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  declarations: [HeaderComponent, FooterComponent, HomeComponent, StarterComponent],
  exports:[HeaderComponent, FooterComponent, HomeComponent,StarterComponent]
})
export class CoreModule { }
